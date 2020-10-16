import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Form from "./Form";
import List from "./List";
import * as service from "../../services/AtividadesService";

function Activities() {
  const [atividades, setAtividades] = useState([]);
  const [atividadeSel, setAtividadeSel] = useState(null);

  useEffect(() => {
    async function fetch(params) {
      const values = await service.listar();
      setAtividades(values);
    }

    fetch();
  }, []);

  return (
    <div className="container">
      <h1>CRUD de Atividades</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />

          {!!atividadeSel && <Form atividade={atividadeSel} />}
          {!atividadeSel && <List atividades={atividades} />}
        </div>
      </div>
    </div>
  );
}

export default Activities;
