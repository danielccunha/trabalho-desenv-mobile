const Atividade = require("../models/Atividade");

exports.index = async (_request, response) => {
  const atividades = await Atividade.find()
    .populate("projeto")
    .populate("usuario")
    .sort({ nome: 1 });

  return response.json(atividades);
};

exports.create = async (request, response) => {
  const atividade = await Atividade.create(request.body);
  return response.json(atividade);
};

exports.update = async ({ body }, response) => {
  const atividade = await Atividade.findByIdAndUpdate(body._id, body);
  if (!atividade) {
    return response.status(404).send();
  }

  return response.json(atividade);
};

exports.delete = async (request, response) => {
  const atividade = await Atividade.findByIdAndDelete(request.params.id);
  if (!atividade) {
    return response.status(404).send();
  }

  return response.json(atividade);
};

exports.show = async (request, response) => {
  const atividade = await Atividade.findById(request.params.id);
  if (!atividade) {
    return response.status(404).send();
  }

  return response.json(atividade);
};

exports.find = async (req, res) => {
  const atividades = await Atividade.find({
    $or: [
      { titulo: { $regex: req.params.filtro, $options: "i" } },
      { descricao: { $regex: req.params.filtro, $options: "i" } },
    ],
  }).sort({ titulo: -1 });

  return res.json(atividades);
};
