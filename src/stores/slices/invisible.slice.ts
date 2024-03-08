import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:false
}

const invisibleSlice = createSlice({
    name:'invisible',
    initialState,
    reducers:{
        formCategory:(state,action) =>{
            state.data = action.payload;
        }
    }  
})

export const invisibleReducer = invisibleSlice.reducer;
export const invisibleAction = invisibleSlice.actions;
