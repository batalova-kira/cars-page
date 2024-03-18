import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65d7a13b27d9a3bc1d7b8567.mockapi.io/cars";

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("?page=1&limit=12");
            console.log(data);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchMore = createAsyncThunk(
    "cars/fetchMore",
    async (currentPage, thunkAPI) => {
        try {
            const { data } = await axios.get(`?page=${currentPage}&limit=12`);
            console.log(data);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
