import api from "./api";

export function listar() {
  return api.get("/usuarios");
}

export function obterPeloId(id) {
  return api.get(`/usuarios/${id}`);
}

export function incluir(data) {
  return api.post("/usuarios", data);
}

export function alterar(data) {
  return api.put(`/usuarios/`, data);
}

export function excluir(id) {
  return api.delete(`/usuarios/${id}`);
}

export function filtrar(filtro) {
  return api.get(`/usuarios/filtro/${filtro}`);
}
