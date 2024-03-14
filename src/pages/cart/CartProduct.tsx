import React, { ChangeEvent, useEffect, useState } from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/stores'
import { cartAction } from '@/stores/slices/cart.slice';
import { api } from '@/service';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
const CartProduct: React.FC = () => {

    const cartStore = useSelector((state: RootState) => state.carter);
    const authenStore = useSelector((state: RootState) => state.authenter);
    const dispatch: AppDispatch = useDispatch();
    console.log("cart Store ", cartStore.data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    //state sdt
    const [numberPhone, setNumberPhone] = useState('');


    //errr
    const [messageApi, contextHolder] = message.useMessage();

    //state address 
    const [address, setAddress] = useState('');

    const handleChangeNumberPhone = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberPhone(event.target.value);
    };

    const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };




    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        handletransferData();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {

        console.log("vô rồi");

        if (authenStore.data) {
            console.log('vô trong luôn đi');

            api.cartModule.getUserId({
                userId: authenStore.data.id
            })
                .then((res) => {
                    // console.log("res , ", res.data.data);
                    dispatch(cartAction.getCart(res.data.data))
                })
        }
    }, [authenStore.data])

    const error = (text: string) => {
        messageApi.open({
            type: 'error',
            content: text,
        });
    };

    const handleQuantity = () => {

    }

    const handleIncrease = async (userId: number, productId: number, itemId: number) => {
        try {
            dispatch(cartAction.increaseQuantity(itemId))
            api.cartModule.inCrease({
                userId: userId,
                productId: productId
            })
                .then((res) => {
                    console.log("res", res);
                })
        }
        catch (err) {
            console.log("err", err);
        }

    }
    const handleDecrease = async (userId: number, productId: number, itemId: number) => {
        try {
            dispatch(cartAction.decreaseQuantity(itemId))
            api.cartModule.deCrease({
                userId: userId,
                productId: productId
            })
                .then((res) => {
                    console.log("res", res);
                })
        }
        catch (err) {
            console.log("err", err);
        }

    }
    const handleDelete = async (userId: number, productId: number, itemId: number) => {
        try {
            dispatch(cartAction.removeFromCart(itemId))
            api.cartModule.delete({
                userId: userId,
                productId: productId
            })
                .then((res) => {
                    console.log("res", res);

                })
        }
        catch (err) {
            console.log("err", err);

        }
    }
    const handletransferData = async () => {
        // console.log("mang cartDTo ", cartStore?.data);
        try {
            if (!address) {
                return error('Vui lòng Nhập Địa Chỉ')
            }
            if (!address) {
                return alert("Vui lòng nhập Số Điện Thoại ");
            }
            let res = await api.receiptsModule.transferData({
                userId: authenStore?.data?.id,
                addressUser: address,
                numberUser: numberPhone

            });
            console.log("res receipt", res);
        }
        catch (err) {

        }
    }
    return (

        <div className="cart">
            {contextHolder}

            <div className="tableCart">
                <div>
                    <table>
                        <thead>

                            <tr>
                                <th>
                                    Hình Ảnh
                                </th>
                                <th>
                                    Tên Sản Phâm
                                </th>
                                <th>
                                    Đơn Giá
                                </th>
                                <th>
                                    Số Lượng
                                </th>
                                <th>
                                    Tổng
                                </th>
                                <th>
                                    ACtion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartStore?.data.map((item, index) => (

                                    <tr key={Math.random() * index * Date.now()}>
                                        <td>
                                            <img src={item.avatar} alt="" />
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td >
                                            <MinusOutlined className='deCrease'
                                                onClick={() => handleDecrease(item.userId, item.productId, item.id)}

                                            />
                                            <input type="number" value={item.quantity} onChange={handleQuantity} />
                                            <PlusOutlined className='inCrease'
                                                onClick={() => handleIncrease(item.userId, item.productId, item.id)}
                                            />
                                        </td>

                                        <td>

                                            {item.price * item.quantity}

                                        </td>
                                        <td>
                                            <button>
                                                <DeleteOutlined
                                                    onClick={() => handleDelete(item.userId, item.productId, item.id)}

                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                </div>

            </div>

            <div className="cart_action">
                <div className="btn">
                    <Button type="primary" onClick={() => {
                        showModal();
                    }}>
                        Đặt Hàng
                    </Button>
                </div>
            </div>


            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modalInfno'>
                <label htmlFor="">Số Điện Thoại :</label>
                <input type="text" placeholder='Nhập Số Điện thoại ' onChange={handleChangeNumberPhone} />
                <br />
                <label htmlFor="">Địa Chỉ :</label>
                <input type="text" placeholder='Vui lòng nhập địa chỉ nhận hàng' onChange={handleChangeAddress} />

            </Modal>
        </div>




    )
}

export default CartProduct