import './Header.scss'
import { Link } from 'react-router-dom'
import pictures from '@/pictures/index'
const Header = () => {
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
              <Link to='/login' className='inputLogin'>
                Đăng Nhập
              </Link>
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