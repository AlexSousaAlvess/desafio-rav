import React, { useState, useEffect } from "react";

import LogoImage from "../../assets/logotipo.png";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles.css";

import { Layout, Menu, Image } from "antd";

import { SettingFilled, FileTextOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapse}>
        <Link to="/">
          <Image src={LogoImage} className="logo" />
        </Link>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<SettingFilled />}>
            <Link to="/">Peças</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/simulations">Simulações</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
