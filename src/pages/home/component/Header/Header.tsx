import './Header.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import pictures from '@/pictures/index'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
import LogOut from './LogOut'

const Header = () => {
  const userStore = useSelector((state: RootState) => state.authenter)
  console.log("userSotre", userStore);
  const [showLogOut, setShowLogOut] = useState<boolean>(false)
  const handleShow = () => {
    setShowLogOut(!showLogOut);
  }
  console.log("hinh anh user ", userStore.data?.avatar);
  console.log("hình ảnh user tren client ", pictures.notAvatar);

  return (
    <div>
      <header>
        <nav>
          <div className="navLeft">
            <div className="navLogo">
              <div className="imageCigarette">
                <img src={pictures.logo} alt="" />
              </div>
              <Link to='/' className='titlePage'>
                Thuốc lá ngoại
              </Link>
            </div>

            <div className="navMenu">
              <ul>
                <li>
                  <Link to='/' className='titleMenu'> Thuốc lá</Link>
                  <i className="iconDown fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <Link to='/' className='titleMenu'>Tracking</Link>
                </li>
                <li>
                  <Link to='/' className='titleMenu'>Giới thiệu</Link>
                </li>
                <li>
                  <Link to='/' className='titleMenu'>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>


          <div className="navAction">
            <div className="navAction__login">
              {
                userStore.data ?
                  <div className='userlogin'>
                    <span className='inputLogin ' onClick={() => { handleShow() }}>
                      {isNaN(Number(userStore.data.username)) ? userStore.data.username : userStore.data.email.split("@")[0]}

                    </span>
                    <img src={userStore.data.avatar} alt="" className='' onClick={() => { handleShow() }} />
                    {
                      showLogOut && <LogOut showLogOut={showLogOut} setShowLogOut={setShowLogOut} />
                    }
                  </div>

                  :

                  <Link to='/login' className='inputLogin'>
                    Đăng Nhập
                  </Link>
              }

            </div>
            <div className="navAction__cart">
              <Link to='/cart'>
                <i className="iconCart fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header