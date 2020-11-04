import React, { useState } from "react";

import { Button, Modal, Form, Input, TreeSelect, InputNumber } from "antd";

import Sidebar from "../../components/Sidebar";

import MyTable from "../../components/Table";

import "./styles.css";

import "antd/dist/antd.css";

const data = [
  {
    key: "1",
    nome: "Jim Green",
    peso: 42,
    valor: "London No. 1 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "2",
    nome: "Jim Green",
    peso: 42,
    valor: "London No. 1 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "3",
    nome: "Joe Black",
    peso: 32,
    valor: "Sidney No. 1 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "4",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "5",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "6",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "7",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "8",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "9",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "10",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "11",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "12",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "13",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "14",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "15",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "16",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "17",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "18",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
  {
    key: "19",
    nome: "Jim Red",
    peso: 32,
    valor: "London No. 2 Lake Park",
    tipo: "Geral",
    ações: "delete",
  },
];

const columns = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Peso",
    dataIndex: "peso",
    key: "peso",
  },
  {
    title: "Valor",
    dataIndex: "valor",
    key: "valor",
  },
  {
    title: "Tipo",
    dataIndex: "tipo",
    key: "tipo",
  },
  {
    title: "Ações",
    dataIndex: "ações",
    key: "ações",
  },
];

const Part = () => {
  const [visibleModal, setVisibleModal] = useState(false);

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
