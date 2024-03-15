import React, { useState } from 'react';
import { ClockCircleOutlined, HomeFilled, RightOutlined } from '@ant-design/icons'
import './SliderAdmin.scss'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const SliderAdmin: React.FC = () => {

  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }


  const items: MenuItem[] = [
    getItem('Quản Lí Sản Phẩm ', 'sub1', <ClockCircleOutlined />, [
      getItem('Loại Danh Mục', 'category', <RightOutlined />,),
      getItem('Sản Phẩm ', 'product', <RightOutlined />),
    ]),
    getItem('Quản Lí Hóa Đơn', 'sub2', <AppstoreOutlined />, [
      getItem('Hóa Đơn', 'receipt'),
    ]),
  ];

  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleItem = (item: MenuItem) => {
    console.log("Item clicked:", item?.key);
    if (item?.key === 'category') {
      navigate('/admin/category')
    }
    if (item?.key === 'product') {
      navigate('/admin/product')
    }
    if (item?.key === 'receipt') {
      
      navigate('/admin/receipt')
    }
  };

  return (
    <div >

      <div className="sliderAdmin">
        <h3>
          <HomeFilled className='icon-homeAdmin' />
          Trang chủ Admin
        </h3>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
          onClick={handleItem}
        />
      </div>

    </div>
  )
}

export default SliderAdmin