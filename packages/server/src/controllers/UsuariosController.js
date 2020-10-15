const Usuario = require("../models/Usuario");

exports.index = async (_request, response) => {
  const usuarios = await Usuario.find();
  return response.json(usuarios);
};

exports.create = async (request, response) => {
  const usuario = await Usuario.create(request.body);
  return response.json(usuario);
};

exports.update = async ({ body }, response) => {
  const usuario = await Usuario.findByIdAndUpdate(body._id, body);
  if (!usuario) {
    return response.status(404).send();
  }

  return response.json(usuario);
};

exports.delete = async (request, response) => {
  const usuario = await Usuario.findByIdAndDelete(request.params.id);
  if (!usuario) {
    return response.status(404).send();
  }

  return response.json(usuario);
};

exports.show = async (request, response) => {
  const usuario = await Usuario.findById(request.params.id);
  if (!usuario) {
    return response.status(404).send();
  }

  return response.json(usuario);
};

exports.find = async (request, response) => {
  const usuarios = await Usuario.find(
    {
      $or: [
        { nome: { $regex: request.params.filtro, $options: "i" } },
        { email: { $regex: request.params.filtro, $options: "i" } },
      ],
    },
    function (err) {
      if (err) response.status(400).send(err);
    }
  ).sort({ nome: -1 });

  return response.json(usuarios);
};
