import { createSlice } from "@reduxjs/toolkit";

export const updateFilterFromURL = () => (dispatch, getState) => {
    const { searchParams } = getState().filter;
    const params = new URLSearchParams(searchParams);
    const selectedMake = params.get("make");
    // const selectedPrice = params.get("price");

    dispatch(setFilterMake(selectedMake || ""));
    // dispatch(setPriceFilter(selectedPrice || ""));
};

const initialState = {
    filterMake: null,
    filterMakeCars: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterMake(state, { payload }) {
            state.filterMake = { ...state.filterMake, ...payload };
        },
        setFilterMakeCars(state, { payload }) {
            state.filterMakeCars = payload;
        },
        setSearchParams(state, { payload }) {
            state.searchParams = payload;
        },
    },
});

export const { setFilterMake, setFilterMakeCars, setSearchParams } =
    filterSlice.actions;
export const filterReducer = filterSlice.reducer;
