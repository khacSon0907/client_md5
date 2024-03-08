import { UserCreate, UserLogin } from "@/interface/authen.interface";
import axios from 'axios';

export const authenModule = {
    register: async function (newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/authen/register`, newUser);
    },

    login: async function (userlogin: UserLogin) {
            return await axios.post(`${import.meta.env.VITE_API_SERVER}/authen/login`, userlogin);
    },
    getData: async (data: {
        token: string
    }) => {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/authen/data`, data)
    },
    loginGoogle: async function (data: {
        token: string
    }) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/authen/google-login`, data);
    },

    changeInfo: async function (formData: FormData) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/authen/changeInfo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

}