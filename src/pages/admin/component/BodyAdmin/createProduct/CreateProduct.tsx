import React, { useState } from 'react'
import './createProduct.scss'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AppDispatch, RootState } from '@/stores';
import { useDispatch, useSelector } from 'react-redux';
import { hiddenProductAction } from '@/stores/slices/invisible.slice';
import AddProduct from './pages/AddProduct';
import { api } from '@/service';
import { productAction } from '@/stores/slices/product.slice';
import { nextTick } from 'process';
const CreateProduct: React.FC = () => {
  const formatCurrency = (value: number): string => {
    // Sử dụng phương pháp của JavaScript để chia thành từng hàng nghìn và thêm ký tự đồng vào sau
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ';

  };
  // state idProduct 
  const [idProduct, setIdProduct] = React.useState<number>(0);
  // Trạng thái edit state 
  const [editProduct, setEditProduct] = React.useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const hiddenStore = useSelector((state: RootState) => state.productHidder);
  const productStore = useSelector((state: RootState) => state.producter);
  const categoryStore = useSelector((state: RootState) => state.categorier);

  const handleCategoryId = (id: number): string => {
    let categoryName = '';
    for (let i = 0; i < categoryStore?.data.length; i++) {
      if (id === categoryStore?.data[i].id) {
        categoryName = categoryStore?.data[i].title;
      }
    }
    return categoryName
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = productStore?.data.slice(firstIndex, lastIndex);
  console.log("record ", record);
  const npage = Math.ceil(productStore?.data.length / recordPerPage);
  console.log("npage", npage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log("number ", numbers[0]);

  //function chuyển trang ;
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const nextPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1);
    }

  }

  const changeCPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (

    <>

      {
        hiddenStore.data === false ?
          <div className='admin_product'>

            <div className="add_product">
              <Button type="primary" className='categoryPages_btn-add'
                onClick={() => {
                  dispatch(hiddenProductAction.hiddenProduct(true));
                }}
              >
                <PlusOutlined />
                Thêm Mới
              </Button>
            </div>
            <div className="product_table">
              <table>
                <thead>
                  <tr>
                    <th>
                      STT
                    </th>
                    <th>
                      Hình Ảnh
                    </th>
                    <th>
                      Tên
                    </th>
                    <th>
                      Loại
                    </th>

                    <th>
                      Nicotine
                    </th>

                    <th>
                      Tar
                    </th>
                    <th>
                      Vị
                    </th>

                    <th>
                      Giá
                    </th>

                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    record.map((item, index) => (
                      <tr key={Math.random() * 999 * Date.now()}>
                        <td>
                          {index + 1}
                        </td>

                        <td>
                          <img src={item.avatar} alt="" />
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {handleCategoryId(item.productId)}
                        </td>


                        <td>
                          {item.nicotine}mg
                        </td>

                        <td>
                          {item.tar}mg
                        </td>
                        <td>
                          {item.smell}
                        </td>

                        <td>
                          {formatCurrency(item.price)}
                        </td>

                        <td>
                          <button
                          >
                            <EditOutlined

                              onClick={() => {
                                dispatch(hiddenProductAction.hiddenProduct(true));
                                setIdProduct(item.id);
                                setEditProduct(true);
                              }}
                            />
                          </button>

                          <button

                            onClick={() => {
                              api.productModule.delete(item.id),
                                dispatch(productAction.deleteProduct(item.id))
                            }}

                          >
                            <DeleteOutlined />
                          </button>

                        </td>
                      </tr>

                    ))


                  }



                </tbody>
              </table>
            </div>

            <nav>
              <ul className='pagination'>
                <li className='page-item'>
                  <a className="page-link"
                    onClick={prePage}
                  >
                    Prev
                  </a>
                </li>

                {
                  numbers.map((n, i) => (
                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                      <a className={`page-link ${currentPage === n ? 'linkActive' : ''}`}
                        onClick={() => {
                          changeCPage(n)
                        }}
                      >
                        {n}
                      </a>
                    </li>
                  ))
                }

                <li className='page-item'>
                  <a className='page-link'
                    onClick={nextPage}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>

          </div>
          :
          <AddProduct idProduct={idProduct} editProduct={editProduct} setEditProduct={setEditProduct} setIdProduct={setIdProduct} />


      }



    </>

  )
}

export default CreateProduct