import React from "react";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles.css";

import { Layout, Menu } from "antd";

import { SettingFilled, FileTextOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<SettingFilled />}>
              <Link to="/">Peças</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              <Link to="/simulations">Simulações</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
};

export default Sidebar;
