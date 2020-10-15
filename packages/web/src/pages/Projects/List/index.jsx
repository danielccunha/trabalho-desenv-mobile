import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const List = (props) => {
  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => props.editarProjeto(rowData._id)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => props.excluirProjeto(rowData._id)}
        />
      </React.Fragment>
    );
  };

  return (
    <div>
      <Button
        label="Novo"
        icon="pi pi-plus"
        className="p-button-success p-mr-2"
        onClick={() => props.editarProjeto(null)}
      />

      <DataTable
        value={props.projetos}
        sortMode="multiple"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Exibindo {first} a {last} de {totalRecords} projetos"
      >
        <Column field="titulo" header="Título" sortable></Column>
        <Column
          field="descricao"
          header="Descrição Detalhada"
          sortable
        ></Column>
        <Column field="dataInicio" header="Data de Início" sortable></Column>
        <Column field="dataFim" header="Data de Fim" sortable></Column>
        <Column field="nome" header="Nome" sortable></Column>
        <Column field="email" header="Email" sortable></Column>
        <Column body={actionBodyTemplate} header="Operações"></Column>
      </DataTable>
    </div>
  );
};

export default List;
