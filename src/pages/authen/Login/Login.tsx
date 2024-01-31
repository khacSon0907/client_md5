import { useNavigate } from 'react-router-dom'
import './Login.scss'
const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="BigLogin">
        <div className="login">
          <div className="titleLogin">
            Đăng Nhập
          </div>
          <form action="">

            <div className="email">
              <div>
                <i className="fa-solid fa-envelope iconEmail"></i>
                <input type="text" placeholder='Tên Đăng Nhập' />  
              </div>
            </div>

            <div className="passwork">
              <div>
                 <i className="fa-solid fa-lock iconPass"></i>
                <input type="text" placeholder='Mật Khẩu' />
              </div>
            </div>

            <div className="actionBtn-Login">
                <button>Xác Nhận</button>
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
            <button onClick={()=>{
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