import { useNavigate } from "react-router-dom"
import { UserCreate } from "@/interface/authen.interface";
import { api } from "@/service/index";
import { Modal, message } from "antd";
import pictures from "@/pictures/index";
const Register = () => {
    const navigate = useNavigate();

    const isUsernameValid = (username: string): boolean => {
      // Kiểm tra xem tên người dùng không chứa khoảng trắng và ký tự đặc biệt
      return /^[a-zA-Z0-9]+$/.test(username);
    };
    
    const handleRegister = async (e: React.FormEvent) =>{
      e.preventDefault();
      try{
       

        let newData: UserCreate = {
          username: (e.target as any).username.value,
          email: (e.target as any).email.value,
          password: (e.target as any).password.value,
          avatar: '/src/pictures/noavater.jpg'
        }
      
        let checkUserName = isUsernameValid(newData.username);
        if(!checkUserName){
          return message.error('Tên người dùng không Chứa Khoảng Cách, Ký Tự Đặc Biệt Và Dấu !')
        }
         await api.authenModule.register(newData); 
         
        Modal.success({
          title: 'Register Success',
          content: 'Vui lòng vào email để xác nhận !',
          onOk: () => {
            navigate('/login')
        }
        });
      }
      catch(err:any){
         message.error(err?.response?.data?.message || "Loi server")
      }
    }

 
  return (
    <div>
      <div className="BigLogin">
        <div className="login">
          <div className="titleLogin">
            Đăng Ký
          </div>
          <form  onSubmit={(e: React.FormEvent) => {
                handleRegister(e) 
            }}>
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