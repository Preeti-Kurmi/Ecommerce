import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';

import cartSlice from './cart'
import authReducer from './authSlice'


export const store = configureStore({
    reducer: {
        product: productSlice,
       cart:cartSlice,
       auth:authReducer,
    },
});

export default store;
