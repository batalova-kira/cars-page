import { createSlice } from "@reduxjs/toolkit";

const toggleFavorite = (carId) => ({
    type: "TOGGLE_FAVORITE",
    payload: carId,
});

const initialState = {
    favoriteCars: [],
};

export const selectFavoriteCars = (state) => state.favoriteCars;

const favoriteCarsSlice = createSlice({
    name: "favoriteCars",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(toggleFavorite, (state, action) => {
            const carId = action.payload.id;
            const index = state.favorite.indexOf(carId);
            if (index === -1) {
                state.favorite.push(carId);
            } else {
                state.favorite.splice(index, 1);
            }
        });
    },
});
export const favoriteCarsReducer = favoriteCarsSlice.reducer;
