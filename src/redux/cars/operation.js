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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (text, thunkAPI) => {
//     try {
//       const responce = await axios.post('/contacts/', {
//         name: text.name,
//         number: text.number,
//       });
//       return responce.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (taskID, thunkAPI) => {
//     try {
//       const responce = await axios.delete(`/contacts/${taskID}`);
//       return responce.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
