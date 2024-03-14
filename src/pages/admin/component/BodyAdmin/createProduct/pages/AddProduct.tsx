import React, { ChangeEvent, useState, useRef, useEffect } from 'react'
import './AddProduct.scss'
import pictures from '@/pictures'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/stores'
import { EnterOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { hiddenProductAction } from '@/stores/slices/invisible.slice'
import { api } from '@/service'
import { productAction } from '@/stores/slices/product.slice'

interface Props {
  idProduct: number
  editProduct: boolean,
  setEditProduct: React.Dispatch<React.SetStateAction<boolean>>
  setIdProduct: React.Dispatch<React.SetStateAction<number>>
}

const AddProduct: React.FC<Props> = (props) => {

  const dispatch: AppDispatch = useDispatch();
  const categoryStore = useSelector((state: RootState) => state.categorier);
  const productStore = useSelector((state: RootState) => state.producter);

  const { idProduct, editProduct, setEditProduct, setIdProduct } = props;



  useEffect(() => {
    console.log("id, product ,", idProduct);

    let findProductId = productStore?.data.find((item: any) => item.id === idProduct)
    console.log("find Productid ", findProductId);
    if (findProductId) {
      setSelectedImage(findProductId.avatar);
      setSelectedCategory(findProductId.productId);
      setSelectedName(findProductId.name);
      setSelectedNicotine(findProductId.nicotine ? findProductId.nicotine : '');
      setSelectedOrigin(findProductId.origin ? findProductId.origin : '');
      setSelectedTar(findProductId.tar ? findProductId.tar : '');
      setSelectedSmell(findProductId.smell ? findProductId.smell : '');
      setSelectedPrice(findProductId.price);

    }


  }, [idProduct])


  //atnd thông báo 
  const [messageApi, contextHolder] = message.useMessage();

  const fileInputRef = useRef<HTMLInputElement>(null);
  //hình ảnh xem trước trên client
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  //file hình ảnh để gửi lên server. 
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  //state category thuốc lá 
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<string>('');

  //state Nictoine 
  const [selectedNicotine, setSelectedNicotine] = useState<string>('');

  //state tar
  const [selecteTar, setSelectedTar] = useState<string>('');

  //state origin
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');

  //state smell
  const [selectedSmell, setSelectedSmell] = useState<string>('');

  //state price
  const [selectedPrice, setSelectedPrice] = useState<number>(0);


  //function change category
  const handleSelectChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setSelectedCategory(isNaN(value) ? 0 : value);
  };

  //fucntion change name categroy 
  const handlesetSelectedName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedName(event.target.value);
  }

  // function change nicotine
  const handlesetSelectedNicotine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNicotine(event.target.value);
  }

  //funciton change Tar
  const handlesetSelectedTar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTar(event.target.value);
  }

  //function change origin
  const handlesetSelectedOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOrigin(event.target.value);
  }

  //function change smell
  const handlesetSelectedSmell = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSmell(event.target.value);
  }

  //function change Price 
  const handlesetSelectedPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedPrice(isNaN(value) ? 0 : value); // Kiểm tra nếu giá trị không phải số, gán 0
  }

  const handleReset = () => {
    setSelectedImage(null);
    setSelectedCategory(0);
    setSelectedName('');
    setSelectedNicotine('');
    setSelectedOrigin('');
    setSelectedTar('');
    setSelectedSmell('');
    setSelectedPrice(0);
  }

  //modal thông báo lỗi 
  const error = (text: string) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };
  //modal thông báo thành công 
  const success = (text: string) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //function Get Api product 
  const handleGetProduct = () => {
    api.productModule.gellAll()
      .then((res) => {
        dispatch(productAction.createProduct(res.data.data))
      })

  }
  const handlCreateProduct = async () => {
    try {
      if (!selectedFile) {
        return error('Vui lòng chọn hình ảnh')
      }
      if (!selectedCategory) {
        return error('Vui lòng chọn danh mục sản phẩm')
      }
      if (!selectedName) {
        return error('vui lòng nhập tên sản phẩm')
      }
      if (!selectedPrice) {
        return error('vui lòng nhập giá sản phẩm')
      }
      if (selectedFile) {
        const formData = new FormData();
        formData.append('product', selectedFile);
        formData.append("data", JSON.stringify({
          name: selectedName,
          origin: selectedOrigin,
          tar: selecteTar,
          nicotine: selectedNicotine,
          smell: selectedSmell,
          price: selectedPrice,
          productId: selectedCategory,
        }))
        const res = await api.productModule.createProduct(formData)
        console.log("res", res);
        handleReset();
        handleGetProduct();
        success("Thêm Sản phẩm thành công");

      }
    }
    catch (err: any) {
      message.error(err?.response?.data?.message || "Loi server")
    }
  }

  const hanleUpdateProduct = async () => {
    try {
      if (selectedFile) {
        console.log("đã vao sửa");

        const formData = new FormData();
        formData.append('productEdit', selectedFile);
        formData.append("data", JSON.stringify({
          name: selectedName,
          origin: selectedOrigin,
          tar: selecteTar,
          nicotine: selectedNicotine,
          smell: selectedSmell,
          price: selectedPrice,
          productId: selectedCategory,
        }))
        let res = await api.productModule.EditProduct(formData, idProduct);
        handleReset();
        success(res.data.message);
        handleGetProduct();
      }
      else {
        console.log("đã vao sửa");
        const formData = new FormData();
        formData.append("data", JSON.stringify({
          name: selectedName,
          origin: selectedOrigin,
          tar: selecteTar,
          nicotine: selectedNicotine,
          smell: selectedSmell,
          price: selectedPrice,
          productId: selectedCategory,
        }))
        let res = await api.productModule.EditProduct(formData, idProduct);
        handleReset();
        success(res.data.message);
        handleGetProduct();



      }
    }
    catch (err) {
      console.log("lỗi mẹ rồi", err);


    }
  }

  return (
    <div>
      {contextHolder}
      <div className="Product">
        <div className="Product_createProduct">
          <h4>THÔNG TIN CHUNG </h4>
          <Button className='back'
            onClick={() => {
              dispatch(hiddenProductAction.hiddenProduct(false));
              setIdProduct(0);
              setEditProduct(false);
            }}
            title='Quay lại'
          >
            <EnterOutlined />
          </Button>
          <div className='Product_createProduct-img'>

            <label htmlFor="">
              Hình ảnh
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />

            {selectedImage == null ? <img src={pictures.notAvatar} alt="" /> : <img src={selectedImage as string} />}

            <button
              onClick={handleClick}
              className='product_add-img'
            >
              Chọn Ảnh
            </button>
          </div>

          <div className="Product_createProduct-category">
            <label htmlFor="">Danh Mục</label>
            <select name="" id="" onChange={handleSelectChangeCategory} value={selectedCategory}>

              <option value=""> Loại Thuốc Lá</option>
              {
                categoryStore.data?.map((item, index) => (
                  <option value={item.id} key={Math.random() * Date.now() * index}> {item.title}</option>
                ))

              }

            </select>
            <label htmlFor="">Tên Sản Phẩm</label>
            <input type="text" placeholder='Vui lòng nhập tên sản phẩm' value={selectedName} onChange={handlesetSelectedName} />
          </div>



          <div className="Product_createProduct-nicotine-tar">
            <label htmlFor="">Nicotine</label>
            <input type="text" placeholder='Nhập nicotine' className='inputNico' value={selectedNicotine} onChange={handlesetSelectedNicotine} />

            <label htmlFor="">Nhựa thuốc Lá</label>
            <input type="text" placeholder='nhập mức tar' className='inputNico' value={selecteTar} onChange={handlesetSelectedTar} />

            <label htmlFor="">Xuất Xứ</label>
            <input type="text" placeholder='Quốc gia' value={selectedOrigin} onChange={handlesetSelectedOrigin} />
          </div>

          <div className="Product_createProduct-smell">
            <label htmlFor="">Vị Thuốc Lá</label>
            <input type="text" placeholder='Nhập vị thuốc lá' className='inputSmell' value={selectedSmell} onChange={handlesetSelectedSmell} />
          </div>
          <div className="Product_createProduct-total">
            <label htmlFor="">Giá</label>
            <input type="number" value={selectedPrice !== 0 ? selectedPrice : ''} placeholder='Vui lòng Giá sản phẩm' onChange={handlesetSelectedPrice} />
          </div>

          <div className="Product_createProduct-btn">
            {
              editProduct ? <button
                onClick={hanleUpdateProduct}>
                Sửa Sản Phẩm
              </button> :

                <button
                  onClick={handlCreateProduct}
                >
                  Tạo Sản Phẩm
                </button>
            }

          </div>



        </div>


      </div>
    </div>
  )
}

export default AddProduct