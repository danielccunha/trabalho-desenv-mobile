const { Router } = require("express");
const controller = require("../controllers/UsersController");

const routes = Router();
routes.get("/", controller.index);

module.exports = routes;
