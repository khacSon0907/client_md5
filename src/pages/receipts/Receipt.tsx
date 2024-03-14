import React, { useEffect } from 'react'
import './Receipt.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
const Receipt: React.FC = () => {
  const authenStore = useSelector((state: RootState) => state.authenter)

  const usernName = authenStore?.data?.username;
  return (
    <div className='receipt'>
      {
        authenStore?.data?.receipts.map((item, index) => (
          <div className="receipt_table">
            <h2>
              Hóa Đơn Đặt Hàng
            </h2>

            <div className="inforUser">



              <div className="inforUser_item">
                <div className="infoUser-name">
                  <span>
                    Tên Người Nhận
                  </span>

                  <span>
                    {usernName}
                  </span>
                </div>
                <div className="infoUser_phone">
                  <span>
                    Số Điện Thoại
                  </span>

                  <span>
                    {item.phoneNumber}
                  </span>
                </div>

                <div className="infoUser_address">
                  <span>
                    Địa Chỉ
                  </span>
                  <span>
                    {item.address}
                  </span>
                </div>


                <div className='receipt_detail'>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          SẢN PHẨM
                        </th>
                        <th>
                          ĐƠN GIÁ
                        </th>
                        <th>
                          SỐ LƯỢNG
                        </th>


                        <th>
                          THÀNH TIỀN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        item.details.map((d, n) => (
                          <tr key={Math.random() * 1234343 * Date.now()}>
                            <td>
                              {n + 1}.
                              {d.name}

                            </td>

                            <td>
                              {d.price}
                            </td>
                            <td>
                              {d.quantity}
                            </td>
                            <td>
                              {d.price * d.quantity}
                            </td>
                          </tr>

                        ))
                      }

                    </tbody>
                  </table>
                </div>

                <div className="bill">
                  <div className="bill_money">
                    <span>
                      Tạm tính
                    </span>
                    <span>
                      {item.totalAmount}
                    </span>
                  </div>
                  <div className="bill_ship">
                    <span>
                      Phí Vận Chuyển
                    </span>

                    <span>
                      0đ
                    </span>
                  </div>
                  <div className="bill_sale">
                    <span>
                      Khuyến mãi
                    </span>
                    <span>
                      0đ
                    </span>
                  </div>
                  <div className="bill_total">
                    <span>
                      Tổng Cổng
                    </span>
                    <span>
                      {item.totalAmount}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>


        ))
      }


    </div>
  )
}

export default Receipt;