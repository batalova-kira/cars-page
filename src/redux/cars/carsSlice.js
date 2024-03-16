import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const carId = action.payload.id;
            const index = state.favorite.findIndex((car) => car.id === carId);
            if (index === -1) {
                state.favorite.push(action.payload);
                console.log(1);
            } else {
                state.favorite.splice(index, 1);
                console.log(2);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, handlePending)
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCars.rejected, handleRejected);
    },
});
export const { toggleFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
