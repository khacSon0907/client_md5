import React from 'react'
import './Header.scss'
import { WindowsFilled } from '@ant-design/icons'
const HeaderAdmin :React.FC = () => {
    return (
        <div className="HeaderAdmin">
            <div className="HeaderAdmin_left">
                <ul>
                    <li id='logoAdmin'>
                        <WindowsFilled className='iconAdmin'/>
                        Administrator
                    </li>

                    <li>
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