import axios from "axios";

export const categoryModule = {
    createCategory: async (data:{title:string}) => {        
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/categories`,data);
    },
    getAll : async () => {
        return await axios.get(`${import.meta.env.VITE_API_SERVER}/categories/all`);
    },
    delete : async (id:number) => {
        return await axios.delete(`${import.meta.env.VITE_API_SERVER}/categories/${id}`);
    },
    patch : async (id:number,data:any) => {
        return await axios.patch(`${import.meta.env.VITE_API_SERVER}/categories/${id}`,data);
    }
    
}