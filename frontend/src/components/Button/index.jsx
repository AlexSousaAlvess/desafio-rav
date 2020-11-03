import React from "react";

import { Button } from "antd";

import "./styles.css";
import "antd/dist/antd.css";

const MyButton = (props) => {
  return (
    <Button type="primary" shape="circle">
      {props.name}
    </Button>
  );
};

export default MyButton;
