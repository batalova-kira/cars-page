import React, { useState } from "react";
import makes from "../../makes.json";
import Select from "react-select";

const MakesFilter = ({ onSelectMake }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const options = makes.map((option) => {
        return {
            value: option,
            label: option,
        };
    });

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onSelectMake(selectedOption.value);
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder="Select make..."
        />
    );
};

export default MakesFilter;
