import api from "./api";

export function listar() {
  return api.get("/atividades");
}

export function obterPeloId(id) {
  return api.get(`/atividades/${id}`);
}

export function incluir(data) {
  return api.post("/atividades", data);
}

export function alterar(data) {
  return api.put(`/atividades/`, data);
}

export function excluir(id) {
  return api.delete(`/atividades/${id}`);
}

export function filtrar(filtro) {
  return api.get(`/atividades/filtro/${filtro}`);
}
