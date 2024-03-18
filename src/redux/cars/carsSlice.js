import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchMore } from "./operation";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const initialState = {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
    currentPage: 1,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        toggleFavorite: (state, { payload }) => {
            const carId = payload.id;
            const index = state.favorite.findIndex((car) => car.id === carId);
            if (index === -1) {
                state.favorite.push(payload);
            } else {
                state.favorite.splice(index, 1);
            }
        },
        setCurrentPage(state, { payload }) {
            state.currentPage = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, handlePending)
            .addCase(fetchCars.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(fetchCars.rejected, handleRejected)
            .addCase(fetchMore.pending, handlePending)
            .addCase(fetchMore.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = [...state.items, ...payload];
                state.currentPage += 1;
            })
            .addCase(fetchMore.rejected, handleRejected);
    },
});
export const { toggleFavorite, setCurrentPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
