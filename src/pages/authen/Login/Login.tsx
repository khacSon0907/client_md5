import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { UserLogin } from '@/interface/authen.interface';
import { api } from '@/service/index';
import { Modal, message } from 'antd';
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let newData: UserLogin = {
        loginUser: (e.target as any).loginUser.value,
        password: (e.target as any).password.value
      }
      console.log("New data Login", newData);
       await api.authenModule.login(newData)
      Modal.success({
        title: 'Success',
        content: 'Đăng nhập thành công',
        onOk: () => {
          navigate('/')
      }
      });

    }
    catch (err: any) {
      message.error(err?.response?.data?.message || "Loi server")
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
                <input type="text" placeholder='Tên đăng nhập' name='loginUser' />
              </div>
            </div>

            <div className="passwork">
              <div>
                <i className="fa-solid fa-lock iconPass"></i>
                <input type="password" placeholder='Mật Khẩu' name='password' />
              </div>
            </div>

            <div className="actionBtn-Login">
              <button type='submit' >Xác Nhận</button>
            </div>

            <div className="actionBtn-Google">
              <button>
                Google
              </button>
            </div>
          </form>

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