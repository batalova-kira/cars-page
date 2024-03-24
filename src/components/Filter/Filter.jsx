import React, { useEffect, useState } from "react";
import makes from "../../makes.json";
import Select from "react-select";
import {
    FilterLabel,
    FilterWrapper,
    SearchBtn,
    SelectWrapper,
    customStyles,
} from "./Filter.styled";
import { useSearchParams } from "react-router-dom";

const MakesFilter = ({ cars, onSelectMake }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const selectedMake = params.get("make");
        const selectedPrice = params.get("price");

        setSelectedOption(selectedMake || "");
        setPriceFilter(selectedPrice || "");
    }, [searchParams]);

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

    const handlePriceChange = (event) => {
        setPriceFilter(event.target.value);
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedOption !== "") {
            params.set("make", selectedOption.value);
        }
        if (priceFilter !== "") {
            params.set("price", priceFilter);
        }
        setSearchParams(params);
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
            <SelectWrapper>
                <FilterLabel>Price</FilterLabel>
                <input
                    type="text"
                    value={priceFilter}
                    onChange={handlePriceChange}
                    placeholder="Enter the price"
                />
            </SelectWrapper>
            <SearchBtn onClick={handleSearch}>Search</SearchBtn>
        </FilterWrapper>
    );
};

export default MakesFilter;
