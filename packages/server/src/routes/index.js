const { Router } = require("express");

const usuariosRouter = require("./usuarios.routes");
const projetosRouter = require("./projetos.routes");
const atividadesRouter = require("./atividades.routes");

const routes = Router();
routes.use("/usuarios", usuariosRouter);
routes.use("/projetos", projetosRouter);
routes.use("/atividades", atividadesRouter);

module.exports = routes;
