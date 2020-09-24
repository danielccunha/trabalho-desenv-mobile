const User = require("../models/Usuario");

exports.index = async (_request, response) => {
  const usuarios = await User.find();
  return response.json(usuarios);
};

exports.create = async (request, response) => {
  const usuario = await User.create(request.body);
  return response.json(usuario);
};
