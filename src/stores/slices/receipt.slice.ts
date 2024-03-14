import { createSlice } from "@reduxjs/toolkit";


interface receiptDetails {
  id   :number;
  name       :string;
  quantity   :number;
  price      :number;
  totalPrice :number;
  productId  :number;
  receiptId :number;
}

interface Receipt {
    id: number;
    address   :string          
    phoneNumber :string;
    status    :string;
    totalAmount :number;
    userId      :number;
    details    : receiptDetails[]
}


interface InitialState {
    data: Receipt[]
}

const initialState: InitialState = {
    data: []
}
const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        setAuthen: (state, action) => {
            state.data = action.payload;
        },
      
    },    
})

export const receiptReducer = receiptSlice.reducer;
export const receiptAction = receiptSlice.actions;
