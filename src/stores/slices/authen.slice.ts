import { createSlice } from "@reduxjs/toolkit";


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
}


interface InitialState {
 data: null|User  
}

const initialState: InitialState = {
    data: null
}

const authenSlice = createSlice({
    name: "authen",
    initialState,
    reducers: {
        setAuthen: (state, action) => {
            // console.log("state dau : ", state);
            state.data = action.payload;
            // console.log("state sau : ", state);
        }
    }
})

export const authenReducer = authenSlice.reducer;
export const authenAction = authenSlice.actions;