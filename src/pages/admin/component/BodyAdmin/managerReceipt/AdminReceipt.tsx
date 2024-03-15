import React from 'react'
import './AdminReceipt.scss'
const AdminReceipt: React.FC = () => {
  return (
    <div className='adminReceiptable'>

      <table>
        <thead>
          <tr>
            <th>
              STT
            </th>
            <th>
              Mã Đơn hàng
            </th>
            <th>
              Chi Tiết
            </th>

            <th>
              Tổng Cổng
            </th>

            <th>
              Trạng Thái
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>

            <td>
              mdmfdmfdfdfmomoomom
            </td>
            <td>
              <button>
                Xem
              </button>
            </td>



            <td>
              290000
            </td>
            <td>
              <button>
                koko
              </button>
            </td>



          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default AdminReceipt