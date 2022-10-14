import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts}from "../action/fetchProducts"



const productsSlice = createSlice({
    name: "allProducts",
    initialState: {products: [], isLoading: false},
    extraReducers:{
        // all products
        [fetchProducts.pending]: (state, action)=>{
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action)=>{
            state.isLoading = false;
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action)=>{
            state.isLoading = false;
        },
    }
});

export default productsSlice.reducer;










