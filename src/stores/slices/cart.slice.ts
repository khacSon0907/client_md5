import { createSlice } from "@reduxjs/toolkit";

interface Cart {
    id: number;
    avatar: string;
    name: string;
    price: number;
    quantity: number;
    userId: number;
    productId: number;
}

interface InitialState {
    data: Cart[]
}

const initialState: InitialState = {
    data: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCart: (state, action) => {
            state.data = action.payload;
        },
        addToCart: (state, action) => {
            state.data.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
            console.log('action.payload');

            const item = state.data.find((item) => item.id === action.payload)
            console.log("item", item);

            if (item) {
                item.quantity++
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.data.findIndex((item) => item.id === action.payload);
            if (itemIndex !== -1) {
                const item = state.data[itemIndex];
                if (item.quantity == 1) {
                    state.data.splice(itemIndex, 1); // Xóa sản phẩm khỏi danh sách
                } else {
                    item.quantity--;
                }
            }
        }

    }
})

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions