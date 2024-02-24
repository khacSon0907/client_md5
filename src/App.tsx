
import Routers from "@routes/Routers"
import { useEffect } from "react"
import { api } from "./service/index"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./stores/index"
import { authenAction } from "./stores/slices/authen.slice"
const App = () => {

  const dispatch:AppDispatch = useDispatch()
  useEffect(  () => {
    try{
       api.authenModule.getData()
      .then(res => {
        console.log("res login data ", res);
        dispatch(authenAction.setAuthen(res.data.data))
      })
    }
    catch(err){
      localStorage.removeItem("token")
    }
  }, [])
  return (
    <div>
      <Routers />
    </div>
  )
}

export default App