const { Router } = require("express");
const controller = require("../controllers/AtividadesController");

const routes = Router();
routes.get("/", controller.index);
routes.get("/:id", controller.show);
routes.post("/", controller.create);
routes.put("/", controller.update);
routes.delete("/:id", controller.delete);
routes.get("/filtro/:filtro", controller.find);

module.exports = routes;
