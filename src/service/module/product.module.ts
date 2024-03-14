import axios from "axios";

export const productModule = {

    createProduct: async function (formData: FormData,) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/products/create-product`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    gellAll: async function () {
        return await axios.get(`${import.meta.env.VITE_API_SERVER}/products/`)
    },
    delete: async (id: number) => {
        return await axios.delete(`${import.meta.env.VITE_API_SERVER}/products/${id}`);
    },

    EditProduct: async function (formData: FormData, id: number) {
        return await axios.patch(`${import.meta.env.VITE_API_SERVER}/products/update/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}