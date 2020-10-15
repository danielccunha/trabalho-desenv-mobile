import React, { useState, useEffect } from "react";

const Form = (props) => {
  const initialFormState = { id: null, nome: "", email: "", celular: "" };
  const [usuario, setUsuario] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  useEffect(() => {
    if (props.usuario != null) setUsuario(props.usuario);
  }, [props.usuario]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (usuario._id === null) {
          props.inserirUsuario(usuario);
        } else {
          props.alterarUsuario(usuario);
        }
        setUsuario(initialFormState);
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        value={usuario.nome}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={usuario.email}
        onChange={handleInputChange}
      />
      <label>Celular</label>
      <input
        type="text"
        name="celular"
        value={usuario.celular}
        onChange={handleInputChange}
      />

      <button>Salvar</button>
      <button
        type="button"
        onClick={props.cancelar}
        style={{ marginLeft: "0.5rem" }}
      >
        Cancelar
      </button>
    </form>
  );
};

export default Form;
