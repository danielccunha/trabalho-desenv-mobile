import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const List = (props) => {
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => props.editarAtividade(rowData._id)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => props.excluirAtividade(rowData._id)}
        />
      </>
    );
  };

  return (
    <div>
      <Button
        label="Novo"
        icon="pi pi-plus"
        className="p-button-success p-mr-2"
        onClick={() => props.editarAtividade(null)}
      />

      <DataTable
        value={props.atividades}
        sortMode="multiple"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Exibindo {first} a {last} de {totalRecords} atividades"
      >
        <Column field="titulo" header="Título" sortable filter></Column>
        <Column
          field="projeto.titulo"
          header="Projeto"
          sortable
          filter
        ></Column>
        <Column
          field="responsavel.nome"
          header="Responsável"
          sortable
          filter
        ></Column>
        <Column body={actionBodyTemplate} header="Operações"></Column>
      </DataTable>
    </div>
  );
};

export default List;
