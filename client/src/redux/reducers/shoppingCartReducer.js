import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items.splice(action.payload, 1)
        },
    },
})

export const {addToCart, removeFromCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer