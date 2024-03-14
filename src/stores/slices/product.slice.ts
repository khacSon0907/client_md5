import { createSlice } from "@reduxjs/toolkit";


export interface Product {
    id     :number;
    avatar :string;       
    name  :string        
    origin :string |null
    tar      :string |null
    nicotine  :string |null
    smell     :string |null
    price   :number
    status: any;
    productId :number;
}

interface InitialState {
    data: Product [] ;
}
const initialState: InitialState = {
    data: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        createProduct : (state, action) => {
            state.data = action.payload;
        },
        deleteProduct : (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        }
    }
    
})
export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;

