import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { AutoComplete } from "primereact/autocomplete";
import { toast } from "react-toastify";

import * as ProjetosService from "../../../services/ProjetosService";
import * as UsuariosService from "../../../services/UsuariosService";

const Form = (props) => {
  const initialFormState = {
    _id: null,
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    projeto: null,
    responsavel: null,
  };
  const [atividade, setAtividade] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAtividade({ ...atividade, [name]: value });
  };

  const [projetos, setProjetos] = useState([]);
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);
  const filtrarProjeto = (event) => {
    setTimeout(() => {
      let filtrados;
      if (!event.query.trim().length) {
        filtrados = [...projetos];
      } else {
        filtrados = projetos.filter((proj) => {
          return proj.titulo
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
      setProjetosFiltrados(filtrados);
    }, 250);
  };
  const listarProjetos = () => {
    ProjetosService.listar()
      .then((response) => {
        setProjetos(response.data);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const filtrarUsuario = (event) => {
    setTimeout(() => {
      let filtrados;
      if (!event.query.trim().length) {
        filtrados = [...usuarios];
      } else {
        filtrados = usuarios.filter((usuar) => {
          return usuar.nome.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setUsuariosFiltrados(filtrados);
    }, 250);
  };
  const listarUsuarios = () => {
    UsuariosService.listar()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  // Função Hooks que é chamada pelo react sempre que atualiza o doom
  useEffect(() => {
    if (props.atividade != null) setAtividade(props.atividade);
    listarProjetos();
    listarUsuarios();
  }, [props.atividade]); // só quando altera o props.atividade que executa

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (atividade._id === null) {
          props.inserirAtividade(atividade);
        } else {
          props.alterarAtividade(atividade);
        }
        setAtividade(initialFormState);
      }}
    >
      <label>Título</label>
      <InputText
        name="titulo"
        value={atividade.titulo}
        onChange={handleInputChange}
      />
      <label>Descrição</label>
      <InputText
        name="descricao"
        value={atividade.descricao}
        onChange={handleInputChange}
      />
      <label>Data de Início</label>
      <Calendar
        name="dataInicio"
        value={atividade.dataInicio}
        onChange={handleInputChange}
        dateFormat="dd/mm/yy"
        showIcon
      />
      <label>Data de Fim</label>
      <Calendar
        name="dataFim"
        value={atividade.dataFim}
        onChange={handleInputChange}
        dateFormat="dd/mm/yy"
        showIcon
      />

      <label htmlFor="projeto">Projeto</label>
      <AutoComplete
        dropdown
        name="projeto"
        value={atividade.projeto}
        suggestions={projetosFiltrados}
        completeMethod={filtrarProjeto}
        field="titulo"
        onChange={handleInputChange}
      />

      <label htmlFor="responsavel">Usuário Responsavel</label>
      <AutoComplete
        dropdown
        name="responsavel"
        value={atividade.responsavel}
        suggestions={usuariosFiltrados}
        completeMethod={filtrarUsuario}
        field="nome"
        onChange={handleInputChange}
      />

      <label />
      <Button label="Salvar" icon="pi pi-save" />
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={props.cancelar}
      ></Button>
    </form>
  );
};

export default Form;
