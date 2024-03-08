import Home from "@/pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "@pages/authen/Login/Login"
import Register from "@/pages/authen/Register/Register"
import Mypage from "@/pages/mypage/Mypage"
import HomePage from "@/pages/homepage/HomePage"
import Admin from "@/pages/admin/Admin"
import CreateCategory from "@/pages/admin/component/BodyAdmin/createCategory/CreateCategory"
import CreateProduct from "@/pages/admin/component/BodyAdmin/createProduct/CreateProduct"
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>

                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/mypage" element={<Mypage />}></Route>
                </Route>
                <Route path="/admin" element={<Admin />}>
                    <Route path="category" element={<CreateCategory />}></Route>
                    <Route path="product" element={<CreateProduct />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers