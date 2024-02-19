import { useState } from 'react'
import './LogOut.scss'
import { useDispatch} from 'react-redux'
import { Modal, } from 'antd';
import {  AppDispatch } from '@/stores'
import { authenAction } from '@/stores/slices/authen.slice'
const LogOut: React.FC = () => {
    // const userStore = useSelector((store: RootState) => store.authenter);
    const dispatch: AppDispatch = useDispatch()

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
                {/* {
                    userStore.data?.role == 'admin' && (
                        <span
                            onClick={() => { navigate('/admin') }}
                        >
                            Admin
                        </span>
                    )
                } */}
                <br />
                <span onClick={() => {
                    showModal()
                }}>
                    Log Out
                    <i className="fa-solid fa-right-from-bracket" style={{ margin: '0px 5px' }} ></i>
                </span>

                <Modal title="Log Out" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Bạn có muốn đăng xuất không ?</p>
                   
                </Modal>
            </div>

        </div>
    )
}

export default LogOut