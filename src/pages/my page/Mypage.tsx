import './MyPage.scss'
import pictures from '@/pictures/index'
import React, { ChangeEvent, useState, useRef } from 'react';
import { api } from '@/service/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores';
import { AppDispatch } from '@/stores/index';
import { authenAction } from '@/stores/slices/authen.slice';
import {  message } from 'antd';
const Mypage: React.FC = () => {

  //Antd Desgin funcion
  const [messageApi, contextHolder] = message.useMessage();
  // store authentication
  const userStore = useSelector((state: RootState) => state.authenter);
  const dispatch: AppDispatch = useDispatch()

  //kiem tra user name 
  const isUsernameValid = (username: string): boolean => {
    // Kiểm tra xem tên người dùng không chứa khoảng trắng và ký tự đặc biệt
    return /^[a-zA-Z0-9]+$/.test(username);
  };

  //Thông báo thay đổi thành công .

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Đã Lưu Thành Công',
    });
  };
  // selectedImage để xem trước hình ảnh
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  //selecFile để gửi file qua NestJS
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // file để gọi DOM 
  const fileInputRef = useRef<HTMLInputElement>(null);

  // inputUser để xem tên của user và thay đổi
  // const nameUser = userStore.data?.username;
  const [inputUsername, setInputUsername] = useState<string | null>(userStore.data?.username ?? '');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {

    setInputUsername(event.target.value);
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
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
  const handleDelete = () => {
    setSelectedImage(pictures.notAvatar);
  }

  const handleChangeInfo = async () => {
    try {
      if (!selectedFile) {
        if (inputUsername !== null) {
          let checkUserName = isUsernameValid(inputUsername);
          if (!checkUserName) {
            return message.error('Tên người dùng không Chứa Khoảng Cách, Ký Tự Đặc Biệt Và Dấu !')
          }
        }
        const formData = new FormData();
        formData.append("data", JSON.stringify({
          username: inputUsername,
          email: userStore.data?.email,
        }))
        const response = await api.authenModule.changeInfo(formData);
        dispatch(authenAction.setAuthen(response.data.data))
        success()

      }
      else {
        if (inputUsername !== null) {
          let checkUserName = isUsernameValid(inputUsername);
          if (!checkUserName) {
            return message.error('Tên người dùng không Chứa Khoảng Cách, Ký Tự Đặc Biệt Và Dấu !')
          }
        }
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append("data", JSON.stringify({
          username: inputUsername,
          email: userStore.data?.email,
        }))
        const response = await api.authenModule.changeInfo(formData);
        dispatch(authenAction.setAuthen(response.data.data))
        success()
      }
    } catch (error) {
      console.error('Upload failed:', error);

    }
  };
  return (

    <div className="BigMyPage">
      {contextHolder}
      <div className="myPageSmall">
        <h3>
          Chỉnh sửa hồ sơ
        </h3>

        <div className="myPageSelf">

          <div className="imageMyPage">
            <p>Ảnh Đại Diện</p>
            <div className='inputAvtar'>
              <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />
            </div>
            <div className="imgAvatar">
              {selectedImage == null ? <img src={userStore.data?.avatar} alt="" /> : <img src={selectedImage as string} />}
            </div>
            <button onClick={handleClick} className='changeImg'>

              Thay đổi ảnh
            </button>
            <button className='changeImg' onClick={() => {
              handleDelete();
            }}>
              Xóa Ảnh
            </button>

          </div>

          <div className="nameMypage">
            <p>Thông Tin Tài Khoản</p>
            <div className='formInfo'>
              <form action="" >
                <label htmlFor="">email</label>
                <input type="text" value={userStore.data?.email ?? ''} readOnly />
                <br />
                <label htmlFor="">User Name</label>
                <input type="text" value={String(inputUsername)} name='UserName' onChange={handleChangeName} />
              </form>
            </div>

          </div>
        </div>
        <div className="btn_saveInfo">
          <button className='saveMyPage'
            type='submit'
            onClick={() => {
              handleChangeInfo();
            }}
          > Lưu Thay Đổi</button>

        </div>

      </div>


    </div>
  )
}

export default Mypage;