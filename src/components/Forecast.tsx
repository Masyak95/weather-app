import React from 'react';
import {ForecastType} from "../types";
import Sunset from "./Icons/Sunset";
import Sunrise from "./Icons/Sunrise";
import {getSunTime} from "../helpers";

type ForecastProps = {
    data: ForecastType
}

const Degree = ({temp}: { temp: number }) => (
    <span>
        {temp}<sup>o</sup>
    </span>
)
const Forecast = ({data}: ForecastProps) => {
    console.log(data.city, data.city.sunset);

    const today = data.list[0]


    return (
        <div
            className={"w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg"}>
            <div className={"mx-auto w-[300px]"}>
                <section className={"text-center"}>
                    <h2 className={"text-2xl font-black"}>{data.city.name}
                        <span className={"font-thin"}> {data.city.country}</span>
                    </h2>
                    <h1 className={"text-4xl font-extrabold"}>
                        <Degree temp={Math.round(today.main.temp)}/>
                    </h1>
                    <p className={"text-sm"}>
                        {today.weather[0].main}
                        {today.weather[0].description}
                    </p>
                    <p>
                        H: <Degree temp={Math.ceil(today.main.temp_max)}/> {" "}
                        L: <Degree temp={Math.floor(today.main.temp_min)}/>
                    </p>
                </section>
                <section className={"flex overflow-x-scroll mt-4 pb-2 mb-5 "}>
                    {data.list.map((item, i) => (
                        <div className={"inline-block text-center w-[50px] flex-shrink-0"}
                             key={i}>
                            <p className={"text-sm"}>
                                {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                            </p>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                 alt={`weather-icon-${item.weather[0].description}`}
                            />
                            <p className={"text-sm font-bold"}>
                                <Degree temp={Math.round(item.main.temp)}/>
                            </p>
                        </div>
                    ))}
                </section>
                <section className={"flex justify-between text-zinc-700"}>
                  <div className={"w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5"}>
                        <Sunrise/> <span className={"mt-2"}>{getSunTime(1688007320)}</span>
                  </div>
                  <div className={"w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5"}>
                      <Sunset/><span className={"mt-2"}>{getSunTime(data.city.sunset)}</span>
                  </div>
                </section>
            </div>
        </div>
    );
};

export default Forecast;