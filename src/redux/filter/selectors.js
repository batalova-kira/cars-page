import { createSelector } from "@reduxjs/toolkit";
import { selectAllCars } from "../cars/selectors";

export const selectFilterMake = (state) => state.filter.filterMake;
export const selectFilteredCars = createSelector(
    [selectAllCars, selectFilterMake],
    (items, filterMake) =>
        items.filter(
            ({ make }) =>
                make.toLowerCase().includes(filterMake.toLowerCase().trim())
            // ||
            // price.toString().includes(filterTerm.toLowerCase().trim())
        )
);
