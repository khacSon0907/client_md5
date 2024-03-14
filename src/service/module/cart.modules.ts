import axios from "axios";

export const cartModule = {
    createCategory: async (data: any) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart`, data);
    },
    // getUserId: async (getUserId:number) => {
    //     return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart/all`, getUserId);
    // },
    getUserId: async (data: {
        userId: number
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart/all`, data)
    },
    inCrease: async (data: {
        userId: number,
        productId: number
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart/increase`, data)
    },
    deCrease: async (data: {
        userId: number,
        productId: number
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart/decrease`, data)
    },
    delete: async (data: {
        userId: number,
        productId: number
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/cart/delete`, data)
    },
}