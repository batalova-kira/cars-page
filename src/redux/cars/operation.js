import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65d7a13b27d9a3bc1d7b8567.mockapi.io/";

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("/cars");
            console.log(responce);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
