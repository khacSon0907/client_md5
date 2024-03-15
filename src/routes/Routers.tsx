import Home from "@/pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "@pages/authen/Login/Login"
import Register from "@/pages/authen/Register/Register"
import Mypage from "@/pages/mypage/Mypage"
import HomePage from "@/pages/homepage/HomePage"
import CreateCategory from "@/pages/admin/component/BodyAdmin/createCategory/CreateCategory"
import CreateProduct from "@/pages/admin/component/BodyAdmin/createProduct/CreateProduct"
import { lazyFn } from "./Lazy"
import CartProduct from "@/pages/cart/CartProduct"
import Receipt from "@/pages/receipts/Receipt"
import AdminReceipt from "@/pages/admin/component/BodyAdmin/managerReceipt/AdminReceipt"
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path='/cart' element={<CartProduct />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/receipt" element={<Receipt/>}></Route>
                    <Route path="/mypage" element={<Mypage />}></Route>
                </Route>
                <Route path="/admin" element={lazyFn(() => import('@pages/admin/Admin'), !localStorage.getItem("token") ? false : true)}>
                    <Route path="category" element={<CreateCategory />}></Route>
                    <Route path="product" element={<CreateProduct />}></Route>
                    <Route path="receipt" element={<AdminReceipt/>}></Route>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Routers