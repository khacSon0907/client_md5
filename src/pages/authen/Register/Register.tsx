import { useNavigate } from "react-router-dom"
const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="BigLogin">
        <div className="login">
          <div className="titleLogin">
            Đăng Ký
          </div>
          <form >
            <div className="email">
              <div>
                <i className="fa-solid fa-envelope iconEmail"></i>
                <input type="text" placeholder='User Name' name='username'/>
              </div>
            </div>
            <div className="email">
              <div>
                <i className="fa-solid fa-envelope iconEmail"></i>
                <input type="text" placeholder='Địa chỉ Email' name='email'/>
              </div>
            </div>

            <div className="passwork">
              <div>
                <i className="fa-solid fa-lock iconPass"></i>
                <input type="password" placeholder='Mật Khẩu' name='password'/>
              </div>
            </div>

            <div className="actionBtn-Login">
              <button type='submit'>Đăng ký</button>
            </div>
          </form>

          <div className='textLogin'>
            <span>
              Đã có tài khoản !
            </span>
          </div>

          <div className="actionRegister">
            <button onClick={()=>{navigate('/login')}}>Đăng Nhập</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register