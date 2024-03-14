import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: false
}

const invisibleSlice = createSlice({
    name: 'invisible',
    initialState,
    reducers: {
        formCategory: (state, action) => {
            state.data = action.payload;
        }
    }
})

const hiddenProductSlice = createSlice({
    name:'hiddenProduct',
    initialState,
    reducers:{
        hiddenProduct: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const invisibleReducer = invisibleSlice.reducer;
export const invisibleAction = invisibleSlice.actions;

export const hiddenProductReducer = hiddenProductSlice.reducer;
export const hiddenProductAction = hiddenProductSlice.actions;