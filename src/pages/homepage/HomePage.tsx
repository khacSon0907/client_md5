import React from 'react'
import pictures from '@/pictures/index'
import './HomePage.scss'
const HomePage: React.FC = () => {
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
        </div>
    )
}

export default HomePage