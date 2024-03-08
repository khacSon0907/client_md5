import { useState } from 'react'
import './LogOut.scss'
import { useDispatch } from 'react-redux'
import { Modal, } from 'antd';
import { AppDispatch } from '@/stores'
import { authenAction } from '@/stores/slices/authen.slice'
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/stores'
import { useSelector } from 'react-redux'


interface Props {
    showLogOut: boolean;
    setShowLogOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogOut: React.FC<Props> = (props) => {
    const { setShowLogOut } = props;

    const userStore = useSelector((state: RootState) => state.authenter);
    console.log("userStore ", userStore.data);
    
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        handleLogOut();
        window.location.href = "/"
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token")
        dispatch(authenAction.setAuthen(null))
    }
    return (
        <div className='logout'>
            <div>

                <ul className='listLogOut'>

                    {
                        userStore.data?.role == 'admin' && (
                            <li
                                onClick={() => { navigate('/admin') }}
                            >
                                Admin
                            </li>
                        )
                    }

                    <li
                        onClick={() => {
                            navigate('/mypage')
                            setShowLogOut(false)
                        }}
                    >
                        <i className="fa-regular fa-user" style={{ marginRight: '5px' }}></i>
                        Tài khoản
                    </li>
                    <li onClick={() => {
                        showModal()
                    }}>
                        Đăng xuất
                        <i className="fa-solid fa-right-from-bracket" style={{ margin: '0px 5px' }} ></i>
                    </li>
                </ul>


                <Modal title="Log Out" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Bạn có muốn đăng xuất không ?</p>

                </Modal>
            </div>

        </div>
    )
}

export default LogOut