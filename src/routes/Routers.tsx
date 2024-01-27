import Home from "@/pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers