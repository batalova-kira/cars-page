import React, { useState } from "react";
import makes from "../../makes.json";
import Select from "react-select";
import {
    FilterLabel,
    FilterWrapper,
    SearchBtn,
    SelectWrapper,
} from "./Filter.styled";

const MakesFilter = ({ onSelectMake }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const options = makes.map((option) => {
        return {
            value: option,
            label: option,
        };
    });

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: "224px",
            border: "none",
            borderRadius: "14px",
            padding: "7px 8px",
            fontSize: "18px",
            lineHeight: "111%",
            background: "#f7f7fb",
            boxShadow: "none",
            color: "#121417",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: "#121417",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: "#fff",
            color: " rgba(18, 20, 23, 0.2)",
        }),
        indicatorSeparator: () => ({ display: "none" }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#121417",
        }),
    };

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
