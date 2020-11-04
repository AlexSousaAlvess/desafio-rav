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
  const [partChildren, setPartChildren] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api.get(`parts`).then((response) => {
      setParts(response.data);
    });
  }, [parts]);

  useEffect(() => {
    api.get(`partChildren`).then((response) => {
      setPartChildren(response.data);
    });
  }, [partChildren]);

  function handleSubmitPart(values) {
    console.log(values);
    history.push("/");
    api
      .post(`parts`, values)
      .then((res) => {
        console.log("Added Successfully!");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  partChildren.map((partChild, index) => {
    data.push({
      key: index + 1000,
      name: partChild.name,
      weight: partChild.weight,
      price: partChild.price,
      type: partChild.type,
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
            <Form onFinish={handleSubmitPart}>
              <Form.Item
                name="name"
                label="Nome"
                rules={[
                  {
                    required: true,
                    message: "Por favor digite um nome",
                  },
                ]}
              >
                <Input placeholder="informe o nome da peça" />
              </Form.Item>

              <Form.Item
                name="type"
                label="Tipo"
                rules={[
                  {
                    required: true,
                    message: "Por favor escolha um tipo",
                  },
                ]}
              >
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

              <Form.Item
                name="weight"
                label="Peso"
                rules={[
                  {
                    required: true,
                    message: "Por favor digite o peso",
                  },
                ]}
              >
                <InputNumber placeholder="informe o peso da peça" />
              </Form.Item>

              <Form.Item
                name="price"
                label="Valor"
                rules={[
                  {
                    required: true,
                    message: "Por favor digite o peso",
                  },
                ]}
              >
                <InputNumber placeholder="informe o preço da peça" />
              </Form.Item>

              <div style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  Salvar
                </Button>{" "}
                <Button
                  type="danger"
                  htmlType="button"
                  onClick={() => history.push("/")}
                >
                  Cancelar
                </Button>
              </div>
            </Form>
          </Modal>
        </div>

        <MyTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Part;
