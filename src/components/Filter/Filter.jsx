import React from "react";
import makes from "../../makes.json";

const MakesFilter = () => {
    const cars = makes.map((car) => {
        return {
            value: car,
            label: car,
            name: "make",
        };
    });

    return (
        <select>
            {cars.map((car) => (
                <option key={car.value}>{car.value}</option>
            ))}
        </select>
    );
};

export default MakesFilter;
