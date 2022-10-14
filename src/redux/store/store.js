import {configureStore} from "@reduxjs/toolkit"
import allProducts from "../reducers/productsSlice"
import cartSlice from "../reducers/cartSlice";
import favoritesSlice from "../reducers/favoritesSlice";

const store = configureStore({
    reducer: {
        allProducts,
        cartSlice,
        favoritesSlice,
    }
})

export default store;







