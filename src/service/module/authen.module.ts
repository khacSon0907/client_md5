import { UserCreate } from "@/interface/authen.interface";
import axios from 'axios';

export const userModule = {
    register: async function(newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users`, newUser)
    }
}