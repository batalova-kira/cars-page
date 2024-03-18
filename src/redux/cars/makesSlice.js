import { createSlice } from "@reduxjs/toolkit";

export const loadMakes = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("/makes.json");
            console.log(response);
            const data = await response.json();
            console.log(data);
            dispatch({ type: "LOAD_MAKES_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "LOAD_MAKES_FAILURE", payload: error.message });
        }
    };
};

const initialState = {
    makes: [],
    error: null,
};

const makesSlice = createSlice({
    name: "makes",
    initialState,
    reducers: {
        loadMakesSuccess(state, action) {
            state.makes = action.payload;
            console.log(state.makes);
            state.error = null;
        },
        loadMakesFailure(state, action) {
            state.error = action.payload;
        },
    },
});

export const { loadMakesSuccess, loadMakesFailure } = makesSlice.actions;
export const makesReducer = makesSlice.reducer;
