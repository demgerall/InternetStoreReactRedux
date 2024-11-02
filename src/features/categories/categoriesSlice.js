import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constants';

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunkApi) => {
        try {
            const response = await axios(`${BASE_URL}/categories`);
            return response.data;
        } catch (err) {
            console.error(err);
            return thunkApi.rejectWithValue(err);
        }
    },
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(getCategories.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload.slice(0, 5);
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, state => {
            state.isLoading = false;
        });
    },
});
