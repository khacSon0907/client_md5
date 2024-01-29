import Home from "@/pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "@pages/authen/Login/Login"
import Register from "@/pages/authen/Register/Register"
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers