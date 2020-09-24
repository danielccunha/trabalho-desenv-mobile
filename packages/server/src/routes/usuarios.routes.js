const { Router } = require("express");
const controller = require("../controllers/UsuariosController");

const routes = Router();
routes.get("/", controller.index);

module.exports = routes;
