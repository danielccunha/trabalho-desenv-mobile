import api from "./api";

export function listar() {
  return api.get("/projetos");
}

export function obterPeloId(id) {
  return api.get(`/projetos/${id}`);
}

export function incluir(data) {
  return api.post("/projetos", data);
}

export function alterar(data) {
  return api.put(`/projetos/`, data);
}

export function excluir(id) {
  return api.delete(`/projetos/${id}`);
}

export function filtrar(filtro) {
  return api.get(`/projetos/filtro/${filtro}`);
}
