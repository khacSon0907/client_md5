import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { UserLogin } from '@/interface/authen.interface';
import { api } from '@/service/index';
import { Modal, message } from 'antd';
import until from '@/until/index';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { User } from 'firebase/auth'

interface UserGoogleLogin extends User {

  accessToken: string;
}


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let newData: UserLogin = {
        loginUser: (e.target as any).loginUser.value,
        password: (e.target as any).password.value
      }
      let result = await api.authenModule.login(newData);
      localStorage.setItem("token", result?.data.token)
      Modal.success({
        title: 'Success',
        content: 'Đăng nhập thành công',
        onOk: () => {
          window.location.href = "/"
        }
      });

    }
    catch (err: any) {
      console.log("err", err);      
      message.error(err?.response?.data?.message || "Loi server")
    }
  }

  const handleLoginGoogle = async () => {
    try {
      if(loading) 
      return
      setLoading(true)
      let googleResulst = await until.firebase.hanldeLoginGoole()
      console.log("google ", googleResulst);
      
      let result = await  api.authenModule.loginGoogle({
        token: (googleResulst.user as UserGoogleLogin).accessToken
      })         
      console.log("token ", result);
      localStorage.setItem("token", result.data.token)
      Modal.success({
          title: "Thông báo",
          content: "Dang nhap thanh cong, comeback homepage",
          onOk: () => {
              window.location.href = "/"
          }
      })       
      setLoading(false)
    }
    catch (err) {
      console.log("Loi nek ", err);

    }
  }
  return (
    <div>
      <div className="BigLogin">
        <div className="login">
          <div className="titleLogin">
            Đăng Nhập
          </div>
          <form onSubmit={(e: React.FormEvent) => {
            handleLogin(e);
          }}>

            <div className="email">
              <div>
                <i className="fa-solid fa-envelope iconEmail"></i>
                <input type="text" placeholder='User Name or Email ' name='loginUser' />
              </div>
            </div>

            <div className="passwork">
              <div>
                <i className="fa-solid fa-lock iconPass"></i>
                <input type="password" placeholder='Mật Khẩu' name='password' />
              </div>
            </div>

            <div className="actionBtn-Login">
              <button type='submit' >Đăng Nhập</button>
              {
                loading && <div className='loading_login'>
                  <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                </div>
              }

            </div>
          </form>

          <div className="actionBtn-Google" >
            <button onClick={() => {
              handleLoginGoogle()
            }}>
              <a href="#" >
                Google
              </a>
            </button>
          </div>

          <div className='textLogin'>
            <span>
              Không Có tài khoản ?
            </span>
          </div>

          <div className="actionRegister">
            <button onClick={() => {
              navigate('/register')
            }}>Đăng ký</button>
          </div>

          <div className="actionForgetPass">
            <button>Quên mật khẩu?</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login