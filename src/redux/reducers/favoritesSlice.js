import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    initialState: [],
    name: "favorites box",
    reducers: {
        addBox : (state, action)=>{return [...state, action.payload]},
        removeFavBox: (state, action) => {return state.filter((favBox)=>  favBox.id !== action.payload.id)},
    }
})

export const {addBox, removeFavBox} = favoritesSlice.actions;
export default favoritesSlice.reducer