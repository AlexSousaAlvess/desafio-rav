import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  Button,
  Modal,
  Tabs,
  Form,
  Input,
  Select,
  InputNumber,
  Table,
  Row,
  Col,
} from "antd";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

import "antd/dist/antd.css";

const Part = () => {
  const [parts, setParts] = useState([]);
  const [partChildren, setPartChildren] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const history = useHistory();

  const { TabPane } = Tabs;

  const { Option } = Select;

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
        setVisibleModal(false);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setVisibleModal(false);
      });
  }

  function handleSubmitPartChild(values) {
    console.log(values);
    history.push("/");
    api
      .post(`partChildren`, values)
      .then((res) => {
        console.log("Added Successfully!");
        setVisibleModal(false);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setVisibleModal(false);
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

  function handleDelete(key, e) {
    e.preventDefault();
    let valueIndex = data.indexOf(key);
    console.log(valueIndex);
    console.log(data);
    data.splice(valueIndex, 1);
  }

  let data = [{}];

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
    // {
    //   title: "Ações",
    //   dataIndex: "",
    //   key: "action",
    //   render: (text, record) => (
    //     <span onClick={(e) => handleDelete(record, e)}>
    //       <a href="/">Deletar</a>
    //     </span>
    //   ),
    // },
  ];

  parts.map((part) => {
    data.push({
      key: part.id,
      name: part.name,
      weight: part.weight,
      price: part.price,
      type: part.type,
    });
    return data;
  });

  partChildren.map((partChild) => {
    data.push({
      key: partChild.id + 1000,
      name: partChild.name,
      weight: partChild.weight,
      price: partChild.price,
      type: partChild.type,
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="Peça primaria" key="1">
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
                    <Select placeholder="Escolha o tipo da peça">
                      <Option value="Geral">Geral</Option>
                      <Option value="Exterior">Exterior</Option>
                    </Select>
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
                      onClick={() => {
                        setVisibleModal(false);
                        history.push("/");
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </Form>
              </TabPane>
              <TabPane tab="Peça secundaria" key="2">
                <Form onFinish={handleSubmitPartChild}>
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
                    <Select placeholder="Escolha o tipo da peça">
                      <Option value="Geral">Exterior</Option>
                      <Option value="Exterior">Inferior</Option>
                    </Select>
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
                      onClick={() => {
                        setVisibleModal(false);
                        history.push("/");
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </div>

        <Row gutter={[40, 0]}>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Part;
