import { configureStore } from "@reduxjs/toolkit";
import { authenReducer ,authenAction} from "./slices/authen.slice";
import { invisibleReducer,hiddenProductReducer } from "./slices/invisible.slice";
import { categoryReducer } from "./slices/category.slice";
import { productReducer } from "./slices/product.slice";
import { cartReducer } from "./slices/cart.slice";
export const store = configureStore({

    reducer: {
        authenter: authenReducer,
        invisibler: invisibleReducer,
        categorier : categoryReducer,
        productHidder:hiddenProductReducer,
        producter: productReducer,
        carter:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(authenAction.fetchAuthen());


