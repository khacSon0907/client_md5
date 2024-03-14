import React from 'react'
import './Header.scss'
import { WindowsFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const HeaderAdmin :React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="HeaderAdmin">
            <div className="HeaderAdmin_left">
                <ul>
                    <li id='logoAdmin'>
                        <WindowsFilled className='iconAdmin'/>
                        Administrator
                    </li>

                    <li
                        onClick={()=>{
                            navigate('/')
                        }}
                    >
                        Vào Trang Web
                    </li>

                    <li>
                        Liên Hê
                    </li>

                    <li>
                        Đơn Hàng
                    </li>
                </ul>
            </div>
            <div className="HeaderAdmin_right">
                <div className='admin_login'>
                        xin Chào 
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin