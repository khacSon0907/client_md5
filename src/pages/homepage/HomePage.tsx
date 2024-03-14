import React from 'react'
import pictures from '@/pictures/index'
import './HomePage.scss'
import { CarOutlined, CheckCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/stores'
import { api } from '@/service'
import { UserCreate } from '@/interface/authen.interface'
import { cartAction } from '@/stores/slices/cart.slice'
const HomePage: React.FC = () => {

    const productStore = useSelector((state: RootState) => state.producter);
    const dispatch: AppDispatch = useDispatch();
    const formatCurrency = (value: number): string => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ';

    };
    const authenStore = useSelector((state: RootState) => state.authenter);
    const handleAddtoCart = async (itemAvtar: string, itemName: string, itemPrice: number, itemId: number) => {
        // console.log(" vô cart rồi nè ");
        try {
            if (authenStore?.data) {
                let data: any = {
                    avatar: itemAvtar,
                    name: itemName,
                    price: itemPrice,
                    quantity: 1,
                    userId: authenStore.data.id,
                    productId: itemId
                }
                let res = await api.cartModule.createCategory(data);
                console.table("res", res.data);
                dispatch(cartAction.addToCart(res.data));
            }
        }
        catch (err) {

        }
    }
    return (
        <div>
            <div className="boderImg">
                <div className="imageRound">
                    <div className="imgSlider">
                        <img src={pictures.slider} alt="" />
                        <div className="contentSlider">
                            <p>
                                THUỐC LÁ NGOẠI CHÍNH HẠNG TỐT NHẤT
                            </p>
                            <h1>
                                SIÊU THỊ THUỐC LÁ
                            </h1>
                            <span>
                                #1 Website bán sỉ lẻ trực tuyến toàn quốc
                            </span>
                            <div className="btn_goStore">
                                <button>
                                    VÀO CỬA HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="Page_product">
                {
                    productStore?.data.map((item, index) => (
                        <div className="item-product" key={index * Math.random()}>
                            <div className="img-product">
                                <img src={item.avatar} alt="" />
                            </div>
                            <div className="name-product">
                                <CheckCircleOutlined className='tick' />
                                <span>
                                    {item.name}
                                </span>
                            </div>
                            <div className="info_product">
                                <ShoppingCartOutlined className='cart-Product' />
                                <span className='conhang'>Còn Hàng</span>
                                <CarOutlined className='cod' />
                                <span>
                                    Cod
                                </span>
                            </div>
                            <div className="action-product">

                                <div className="price_product">
                                    {formatCurrency(item.price)}
                                </div>

                                <div className="btn">
                                    <Button className='btn-act'
                                        onClick={() => {
                                            handleAddtoCart(item.avatar, item.name, item.price, item.id)
                                        }}
                                    >
                                        <ShoppingCartOutlined />
                                        Thêm

                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default HomePage