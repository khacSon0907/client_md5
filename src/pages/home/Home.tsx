import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import { Outlet } from "react-router-dom"
import './Home.scss'
const Home = () => {
  return (
    <div className="homePages">
      <Header/>
      <div className="homeBody">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home