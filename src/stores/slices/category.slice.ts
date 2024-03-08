import { createSlice } from "@reduxjs/toolkit";

interface Categories {
    id: number;
    title: string;
    status: string;
}

interface InitialState {
    data: Categories[]
    // loading:boolean
}

const initialState: InitialState = {
    data: []
    // loading:false
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setAuthen: (state, action) => {
            state.data = action.payload;
        },
        deleteCategoy :(state,action)=>{
            state.data = state.data.filter(item => item.id != action.payload)
        },
        updateCategory :(state,action) => {
            state.data= state.data.map((item)=>{
                    if(item.id === action.payload.id){
                        item.title = action.payload.title
                    }
                return item
            }
        
            )
        },
    },    
})

export const categoryReducer = categorySlice.reducer;
export const categoryAction = categorySlice.actions;
