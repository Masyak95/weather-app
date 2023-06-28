import React from 'react';
import {ForecastType} from "../types";

type ForecastProps = {
    data: ForecastType
}

const Forecast = ({data}: ForecastProps) => {
    return (
        <div>
            <p>Forecast</p>
        </div>
    );
};

export default Forecast;