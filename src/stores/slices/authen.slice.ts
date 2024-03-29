import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/service/index";



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
  
export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    emailcomfirm: boolean;
    role: any;
    status: any;
    createAt: string;
    updateAt: string;
    avatar: string;  
    receipts: Receipt[]  
}


interface InitialState {
    data: User | null;
    loading: boolean
}

const initialState: InitialState = {
    data: null,
    loading: false,
}

const authenSlice = createSlice({
    name: "authen",
    initialState,
    reducers: {
        setAuthen: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthen.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAuthen.fulfilled, (state, action) => {
                state.loading = false;                
                state.data = action.payload;
            })
            .addCase(fetchAuthen.rejected, (state) => {
                state.loading = false;
            });
    }
})

const fetchAuthen = createAsyncThunk(
    "authen/fetchAuthen",
    async () => {
        const res = await api.authenModule.getData({
            token: localStorage.getItem("token") || "null"
        });
        return res.data.data;
    })

export const authenReducer = authenSlice.reducer;
export const authenAction = {
    ...authenSlice.actions,
    fetchAuthen    
}
