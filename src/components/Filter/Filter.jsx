import React, { useState } from "react";
import makes from "../../makes.json";
import Select from "react-select";
import {
    FilterLabel,
    FilterWrapper,
    SearchBtn,
    SelectWrapper,
    customStyles,
} from "./Filter.styled";

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
        <FilterWrapper>
            <SelectWrapper>
                <FilterLabel>Car brand</FilterLabel>
                <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="Enter the text"
                />
            </SelectWrapper>
            <SearchBtn type="submit">Search</SearchBtn>
        </FilterWrapper>
    );
};

export default MakesFilter;
