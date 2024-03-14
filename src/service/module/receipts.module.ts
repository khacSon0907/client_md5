import axios from "axios";

export const receiptsModule = {
    transferData: async (data: {
        userId: number | undefined,
        addressUser: string,
        numberUser: string
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/receipts/create`, data)
    },
    getRecepit: async (data: {
        userId: number | null,
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/receipts/getUserId`, data)
    },
}