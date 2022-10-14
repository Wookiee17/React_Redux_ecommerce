import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    initialState: [],
    name: "cart",
    reducers:{
        addCart: (state, action)=> {
            const findQuantities = state.find((cart)=> cart.id === action.payload.id)
            if(findQuantities){
                findQuantities.quantity += 1;
            }else{
                const cartClone = {...action.payload, quantity: 1}
                state.push(cartClone)
            }
        },
        removeCart: (state, action)=> {return state.filter((cart)=>  cart.id !== action.payload.id)},
       
    }
})

export const {addCart, removeCart,clearAllCaert } = cartSlice.actions
export default cartSlice.reducer