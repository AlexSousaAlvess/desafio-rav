import React from "react";

import Sidebar from "../../components/Sidebar";

import MyButton from "../../components/Button";

import MyTable from "../../components/Table";

import "./styles.css";

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
  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="header">
          <h1>Peças</h1>
          <MyButton name="+" />
        </div>
        <MyTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Part;
