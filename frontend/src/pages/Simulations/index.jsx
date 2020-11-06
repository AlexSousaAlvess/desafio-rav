import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { Button, Modal, Form, Input, Select, Table, Row, Col } from "antd";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

const Simulation = () => {
  const [simulations, setSimulations] = useState([]);
  const [parts, setParts] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [size, setSize] = React.useState("default");

  const history = useHistory();

  const { Option } = Select;

  useEffect(() => {
    api.get(`simulations`).then((response) => {
      setSimulations(response.data);
    });
  }, [simulations]);

  useEffect(() => {
    api.get(`parts`).then((response) => {
      setParts(response.data);
    });
  }, [parts]);

  function handleSubmitSimulation(values) {
    let partObj = [];
    values.parts.map((value) => {
      partObj.push({
        id: parseInt(value),
      });
    });
    let assemblyValue = {
      name: values.name,
      description: values.description,
      parts: partObj,
    };
    console.log(assemblyValue);
    history.push("/simulations");
    api
      .post(`simulations`, assemblyValue)
      .then((res) => {
        console.log("Added Successfully!");
        setVisibleModal(false);
        history.push("/simulations");
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

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const children = [];

  parts.map((part) => {
    children.push(<Option key={part.id}>{part.name}</Option>);
    return children;
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const data = [{}];

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },
  ];

  simulations.map((simulation) => {
    data.push({
      key: simulation.id,
      name: simulation.name,
      description: simulation.description,
    });
    return data;
  });

  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="header">
          <h1>Simulações</h1>
          <Button type="primary" shape="circle" onClick={handleShowModal}>
            +
          </Button>

          <Modal
            title="Nova simulação"
            visible={visibleModal}
            onOk={handleOkModal}
            onCancel={handleCancelModal}
          >
            <Form onFinish={handleSubmitSimulation}>
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
                <Input placeholder="informe o nome da simulação" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Descrição"
                rules={[
                  {
                    required: true,
                    message: "Por favor digite uma descrição",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item name="parts" label="Peças usadas">
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Please select"
                  onChange={handleChange}
                  style={{ width: "100%" }}
                >
                  {children}
                </Select>
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
                    history.push("/simulations");
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </Form>
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

export default Simulation;
