import Home from "@/pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "@pages/authen/Login/Login"
import Register from "@/pages/authen/Register/Register"
import Mypage from "@/pages/my page/Mypage"
import HomePage from "@/pages/homepage/HomePage"
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/mypage" element={<Mypage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers