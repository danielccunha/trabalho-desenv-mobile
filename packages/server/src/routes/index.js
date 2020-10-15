const { Router } = require("express");

const usuariosRouter = require("./usuarios.routes");
const projetosRouter = require("./projetos.routes");

const routes = Router();
routes.use("/usuarios", usuariosRouter);
routes.use("/projetos", projetosRouter);

module.exports = routes;
