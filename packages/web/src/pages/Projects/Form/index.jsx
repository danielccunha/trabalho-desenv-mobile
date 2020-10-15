import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const Form = (props) => {
  const initialFormState = {
    id: null,
    nome: "",
    email: "",
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
  };
  const [projeto, setProjeto] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjeto({ ...projeto, [name]: value });
  };

  useEffect(() => {
    if (props.projeto != null) {
      setProjeto(props.projeto);
    }
  }, [props.projeto]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (projeto._id === null) {
          props.inserirProjeto(projeto);
        } else {
          props.alterarProjeto(projeto);
        }
        setProjeto(initialFormState);
      }}
    >
      <label>Título</label>
      <InputText
        name="titulo"
        value={projeto.titulo}
        onChange={handleInputChange}
      />
      <label>Descrição Detalhada</label>
      <InputText
        name="descricao"
        value={projeto.descricao}
        onChange={handleInputChange}
      />
      <label>Data de Início</label>
      <Calendar
        name="dataInicio"
        value={projeto.dataInicio}
        onChange={handleInputChange}
        dateFormat="dd/mm/yy"
        showIcon
      />
      <label>Data de Fim</label>
      <Calendar
        name="dataFim"
        value={projeto.dataFim}
        onChange={handleInputChange}
        dateFormat="dd/mm/yy"
        showIcon
      />
      <label>Nome</label>
      <InputText
        name="nome"
        value={projeto.nome}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <InputText
        name="email"
        value={projeto.email}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <button>Salvar</button>
      <button onClick={props.cancelar} className="ml">
        Cancelar
      </button>
    </form>
  );
};

export default Form;
