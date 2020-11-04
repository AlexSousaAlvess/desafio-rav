import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { Button, Modal, Form, Input, TreeSelect, InputNumber } from "antd";

import Sidebar from "../../components/Sidebar";

import MyTable from "../../components/Table";

import "./styles.css";

import "antd/dist/antd.css";

const Part = () => {
  const [parts, setParts] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    api.get(`parts`).then((response) => {
      setParts(response.data);
    });
  }, [parts]);

  function handleShowModal(e) {
    e.preventDefault();
    setVisibleModal(true);
  }

  function handleOkModal(e) {
    e.preventDefault();
    console.log("ok");
    setVisibleModal(false);
  }

  function handleCancelModal(e) {
    e.preventDefault();
    console.log("cancel");
    setVisibleModal(false);
  }

  let columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Peso",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Valor",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Tipo",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Ações",
      dataIndex: "acoes",
      key: "acoes",
    },
  ];

  let data = [{}];

  parts.map((part, index) => {
    data.push({
      key: index,
      name: part.name,
      weight: part.weight,
      price: part.price,
      type: part.type,
      acoes: "Delete",
    });
    return data;
  });

  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="header">
          <h1>Peças</h1>
          <Button type="primary" shape="circle" onClick={handleShowModal}>
            +
          </Button>

          <Modal
            title="Nova peça"
            visible={visibleModal}
            onOk={handleOkModal}
            onCancel={handleCancelModal}
          >
            <Form>
              <Form.Item label="Nome">
                <Input />
              </Form.Item>
              <Form.Item label="Tipo">
                <TreeSelect
                  treeData={[
                    {
                      title: "Peça pai",
                      value: "Peça pai",
                      children: [
                        {
                          title: "Geral",
                          value: "Geral",
                        },
                        {
                          title: "Exterior",
                          value: "Exterior",
                        },
                      ],
                    },
                    {
                      title: "Peça filha",
                      value: "Peça filha",
                      children: [
                        {
                          title: "Exterior",
                          value: "Exterior",
                        },
                        {
                          title: "Interior",
                          value: "Interior",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Peso">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Valor">
                <InputNumber />
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <MyTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Part;
