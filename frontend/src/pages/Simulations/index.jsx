import React from "react";

import Sidebar from "../../components/Sidebar";

import MyButton from "../../components/Button";

import MyTable from "../../components/Table";

import "./styles.css";

const data = [
  {
    key: "1",
    nome: "Jim Green",
    descrição: "London No. 1 Lake Park",
    ações: "delete",
  },
  {
    key: "2",
    nome: "Jim Green",
    descrição: "London No. 1 Lake Park",
    ações: "delete",
  },
  {
    key: "3",
    nome: "Joe Black",
    descrição: "Sidney No. 1 Lake Park",
    ações: "delete",
  },
  {
    key: "4",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "5",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "6",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "7",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "8",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "9",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "10",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "11",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "12",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "13",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "14",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "15",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "16",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "17",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "18",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
    ações: "delete",
  },
  {
    key: "19",
    nome: "Jim Red",
    descrição: "London No. 2 Lake Park",
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
    title: "Descrição",
    dataIndex: "descrição",
    key: "descrição",
  },
  {
    title: "Ações",
    dataIndex: "ações",
    key: "ações",
  },
];

const Simulation = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="header">
          <h1>Simulações</h1>
          <MyButton name="+" />
        </div>
        <MyTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Simulation;
