import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterMake: null,
    filterMakeCars: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterMake(state, {payload}) {
            state.filterMake = { ...state.filterMake, ...payload };
        },
        setFilterMakeCars(state, { payload }) {
            state.filterMakeCars = payload;
        },
    },
});

export const { setFilterMake, setFilterMakeCars } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
