const Projeto = require("../models/Projeto");

exports.index = async (_request, response) => {
  const projetos = await Projeto.find();
  return response.json(projetos);
};

exports.create = async (request, response) => {
  const projeto = await Projeto.create(request.body);
  return response.json(projeto);
};

exports.update = async ({ body }, response) => {
  const projeto = await Projeto.findByIdAndUpdate(body._id, body);
  if (!projeto) {
    return response.status(404).send();
  }

  return response.json(projeto);
};

exports.delete = async (request, response) => {
  const projeto = await Projeto.findByIdAndDelete(request.params.id);
  if (!projeto) {
    return response.status(404).send();
  }

  return response.json(projeto);
};

exports.show = async (request, response) => {
  const projeto = await Projeto.findById(request.params.id);
  if (!projeto) {
    return response.status(404).send();
  }

  return response.json(projeto);
};

exports.find = async (req, res) => {
  const projetos = await Projeto.find(
    {
      $or: [
        { nome: { $regex: req.params.filtro, $options: "i" } },
        { email: { $regex: req.params.filtro, $options: "i" } },
        { titulo: { $regex: req.params.filtro, $options: "i" } },
      ],
    },
    function (err) {
      if (err) res.status(400).send(err);
    }
  ).sort({ titulo: -1 });

  return res.json(projetos);
};
