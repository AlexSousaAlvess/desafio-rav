import React from "react";

import { Table } from "antd";
import "antd/dist/antd.css";

import "./styles.css";

const MyTable = (props) => {
  return <Table columns={props.columns} dataSource={props.data} />;
};

export default MyTable;
