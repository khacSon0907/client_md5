import { configureStore } from "@reduxjs/toolkit";
import { authenReducer } from "./slices/authen.slice";

export const store = configureStore({

    reducer: {
        authenter: authenReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;