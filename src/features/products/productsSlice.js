import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constants';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkApi) => {
        try {
            const response = await axios(`${BASE_URL}/products`);
            return response.data;
        } catch (err) {
            console.error(err);
            return thunkApi.rejectWithValue(err);
        }
    },
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        // filtered: [],
        // related: [],
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(getProducts.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload.slice(0, 5);
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, state => {
            state.isLoading = false;
        });
    },
});
