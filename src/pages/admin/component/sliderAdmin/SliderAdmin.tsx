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
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
    ]),
    getItem('Navigation Three', 'sub3', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
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