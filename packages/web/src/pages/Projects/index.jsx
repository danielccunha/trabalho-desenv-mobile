import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import ProjetoList from "./List";
import ProjetoForm from "./Form";
import * as ProjetoService from "../../services/ProjetosService";

const Projects = () => {
  const inserirProjeto = (projeto) => {
    ProjetoService.incluir(projeto)
      .then((response) => {
        toast.success("Incluido com sucesso");
        listarProjetos();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const initProjeto = {
    _id: null,
    nome: "",
    email: "",
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
  };
  const [projeto, setProjeto] = useState(initProjeto);

  const editarProjeto = (id) => {
    setEditando(true);
    if (id === null) setProjeto(initProjeto);
    else setProjeto(projetos.filter((projetos) => projetos._id === id)[0]);
  };

  const alterarProjeto = (alterado) => {
    ProjetoService.alterar(alterado)
      .then((response) => {
        toast.success("Alterado com sucesso");
        listarProjetos();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const excluirProjeto = (id) => {
    ProjetoService.excluir(id)
      .then((response) => {
        listarProjetos();
        console.log(response.data);
      })
      .catch((e) => {
        toast.error(e);
        console.log(e);
      });
  };

  const [editando, setEditando] = useState(false);

  const [projetos, setProjetos] = useState([]);

  const cancelar = () => {
    toast.info("Operação cancelada");
    setEditando(false);
  };

  const listarProjetos = () => {
    ProjetoService.listar()
      .then((response) => {
        setProjetos(response.data);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  useEffect(() => {
    listarProjetos();
  }, []);

  function TelaAtiva(props) {
    if (editando) {
      return (
        <ProjetoForm
          projeto={projeto}
          inserirProjeto={inserirProjeto}
          alterarProjeto={alterarProjeto}
          cancelar={cancelar}
        />
      );
    }
    return (
      <ProjetoList
        projetos={projetos}
        excluirProjeto={excluirProjeto}
        editarProjeto={editarProjeto}
      />
    );
  }

  return (
    <div className="container">
      <h1>CRUD de Projetos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <TelaAtiva />
        </div>
      </div>
    </div>
  );
};

export default Projects;
