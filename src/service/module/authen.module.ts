import { UserCreate ,UserLogin} from "@/interface/authen.interface";
import axios from 'axios';

export const authenModule = {
    register: async function(newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/register`, newUser);
    },
    login : async function( userlogin : UserLogin) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/login`, userlogin);
    }
}