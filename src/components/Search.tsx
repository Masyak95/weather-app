import {ChangeEvent, useEffect, useState} from "react";
import {OptionType} from "../types";

type SearchType = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (op: OptionType) => void
    onSubmit: () => void
}

const Search = ({term, options, onInputChange, onOptionSelect, onSubmit}: SearchType) => {


    return (
        <main
            className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
            <section
                className={"w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] " +
                    " bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg  text-zinc-700"}>
                <h1 className={"text-4xl font-thin"}>Weather <span className={"font-black"}>Forecast</span></h1>
                <p className={"text-sm mt-2"}>Enter below a place you want to know the weather of and select an option
                    from the dropdown</p>
                <div className={"relative flex mt-10 md:mt-4"}>
                    <input type={"text"}
                           value={term}
                           className={"px-2 py-1 rounded-l-md border-2 border-white"}
                           onChange={onInputChange}
                    />
                    <ul className={"absolute top-9 bg-white ml-1 rounded-b-md"}>
                        {options.map((op: OptionType, index: number) => (
                            <li key={op.name + "-" + index}>
                                <button
                                    className={"text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"}
                                    onClick={() => onOptionSelect(op)}
                                >
                                    {op.name}, {op.country}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={"rounded-r-md border border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-2 cursor-pointer"}
                        onClick={onSubmit}
                    >
                        search
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Search
