import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import { Outlet } from "react-router-dom"
import './Home.scss'
import { useEffect } from "react"
import { api } from "@/service"
import { productAction } from "@/stores/slices/product.slice"
import { AppDispatch } from "@/stores"
import { useDispatch } from "react-redux"
const Home = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    try {
      api.productModule.gellAll()
        .then((res) => {
          dispatch(productAction.createProduct(res.data.data))
        })
    }
    catch (err) {
      console.log("err", err);
    }
  }, [])
  return (
    <div className="homePages">
      <Header />
      <div className="homeBody">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home