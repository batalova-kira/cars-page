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
import { useDispatch } from "react-redux";
import { updateFilterFromURL } from "../../redux/filter/filterSlice";

const MakesFilter = ({ cars, onSelectMake }) => {
    const [selectedOption, setSelectedOption] = useState("");
    // const [priceFilter, setPriceFilter] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateFilterFromURL());
    }, [dispatch]);

    const options = makes.map((option) => {
        return {
            value: option,
            label: option,
        };
    });

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    // const handlePriceChange = (event) => {
    //     setPriceFilter(event.target.value);
    // };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedOption !== "") {
            params.set("make", selectedOption.value);
        }
        // if (priceFilter !== "") {
        //     params.set("price", priceFilter);
        // }
        onSelectMake(selectedOption.value);
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
            {/* <SelectWrapper>
                <FilterLabel>Price</FilterLabel>
                <Select
                    value={priceFilter}
                    onChange={handlePriceChange}
                    placeholder="Enter the price"
                />
            </SelectWrapper> */}
            <SearchBtn onClick={handleSearch}>Search</SearchBtn>
        </FilterWrapper>
    );
};

export default MakesFilter;
