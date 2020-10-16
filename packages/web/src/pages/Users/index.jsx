import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import List from "./List";
import Form from "./Form";
import * as UsuarioService from "../../services/UsuariosService";

const Users = () => {
  const inserirUsuario = (usuario) => {
    UsuarioService.incluir(usuario)
      .then(() => {
        toast.success("Incluido com sucesso");
        listarUsuarios();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const initUsuario = { _id: null, nome: "", email: "", celular: "" };
  const [usuario, setUsuario] = useState(initUsuario);

  const editarUsuario = (id) => {
    setEditando(true);
    if (id === null) setUsuario(initUsuario);
    else setUsuario(usuarios.filter((usuario) => usuario._id === id)[0]);
  };

  const alterarUsuario = (alterado) => {
    UsuarioService.alterar(alterado)
      .then((response) => {
        toast.success("Alterado com sucesso");
        listarUsuarios();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const excluirUsuario = (id) => {
    UsuarioService.excluir(id)
      .then((response) => {
        listarUsuarios();
        console.log(response.data);
      })
      .catch((e) => {
        toast.error(e);
        console.log(e);
      });
  };

  const [editando, setEditando] = useState(false);

  const [usuarios, setUsuarios] = useState([]);

  const cancelar = () => {
    toast.info("Operação cancelada");
    setEditando(false);
  };

  const listarUsuarios = () => {
    UsuarioService.listar()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  function TelaAtiva(props) {
    if (editando) {
      return (
        <Form
          usuario={usuario}
          inserirUsuario={inserirUsuario}
          alterarUsuario={alterarUsuario}
          cancelar={cancelar}
        />
      );
    }
    return (
      <List
        usuarios={usuarios}
        excluirUsuario={excluirUsuario}
        editarUsuario={editarUsuario}
      />
    );
  }

  return (
    <div className="container">
      <h1>CRUD de Usuários</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <TelaAtiva />
        </div>
      </div>
    </div>
  );
};

export default Users;
