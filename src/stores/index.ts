import { configureStore } from "@reduxjs/toolkit";
import { authenReducer ,authenAction} from "./slices/authen.slice";
import { invisibleReducer } from "./slices/invisible.slice";
import { categoryReducer } from "./slices/category.slice";
export const store = configureStore({

    reducer: {
        authenter: authenReducer,
        invisibler: invisibleReducer,
        categorier : categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(authenAction.fetchAuthen());


