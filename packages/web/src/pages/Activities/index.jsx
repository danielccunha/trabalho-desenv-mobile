import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import AtividadeList from "./List";
import AtividadeForm from "./Form";
import * as AtividadeService from "../../services/AtividadesService";

const Activities = () => {
  const inserirAtividade = (atividade) => {
    AtividadeService.incluir(atividade)
      .then((response) => {
        toast.success(`Incluido com sucesso`);
        listarAtividades();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const initAtividade = {
    _id: null,
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    projeto: null,
    responsavel: null,
  };
  const [atividade, setAtividade] = useState(initAtividade);

  const editarAtividade = (id) => {
    setEditando(true);
    if (id === null) setAtividade(initAtividade);
    else
      setAtividade(atividades.filter((atividades) => atividades._id === id)[0]);
  };

  const alterarAtividade = (alterado) => {
    AtividadeService.alterar(alterado)
      .then((response) => {
        toast.success(`Alterado com sucesso`);
        listarAtividades();
        setEditando(false);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const excluirAtividade = (id) => {
    AtividadeService.excluir(id)
      .then((response) => {
        listarAtividades();
        console.log(response.data);
      })
      .catch((e) => {
        toast.error(e);
        console.log(e);
      });
  };

  const [editando, setEditando] = useState(false);

  const [atividades, setAtividades] = useState([]);

  const cancelar = () => {
    toast.info("Operação cancelada");
    setEditando(false);
  };

  const listarAtividades = () => {
    AtividadeService.listar()
      .then((response) => {
        response.data.forEach((item) => {
          item.dataInicio = new Date(item.dataInicio);
          item.dataFim = new Date(item.dataFim);
        });
        setAtividades(response.data);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  useEffect(() => {
    listarAtividades();
  }, []);

  function TelaAtiva(props) {
    if (editando) {
      return (
        <AtividadeForm
          atividade={atividade}
          inserirAtividade={inserirAtividade}
          alterarAtividade={alterarAtividade}
          cancelar={cancelar}
        />
      );
    }
    return (
      <AtividadeList
        atividades={atividades}
        excluirAtividade={excluirAtividade}
        editarAtividade={editarAtividade}
      />
    );
  }

  return (
    <div className="container">
      <h1>CRUD de Atividades</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <TelaAtiva />
        </div>
      </div>
    </div>
  );
};

export default Activities;
