import React from 'react'
import HeaderAdmin from './component/HeaderAdmin/HeaderAdmin'
import SliderAdmin from './component/sliderAdmin/SliderAdmin'
import './Admin.scss'
import { Outlet } from "react-router-dom"
import { HomeFilled } from '@ant-design/icons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  AppDispatch } from '@/stores'
import { categoryAction } from '@/stores/slices/category.slice'

import { api } from '@/service'

const Admin: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    try {
      api.categoryModule.getAll()

        .then((res) => {
          dispatch(categoryAction.setAuthen(res.data.data))
        })
    }
    catch (err) {
      console.log("err", err);

    }
  }, [])




  return (
    <div className='adminPage'>
      <HeaderAdmin></HeaderAdmin>
      <div className="bodyAdmin">
        <div className="slider">
          <SliderAdmin></SliderAdmin>
        </div>

        <div className="content">
          <h3>
            <HomeFilled className='icon-homeAdmin' />
            Trang chủ website
          </h3>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Admin