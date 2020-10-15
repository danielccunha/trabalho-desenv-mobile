const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  dataInicio: String,
  dataFim: String,
  nome: String,
  email: String,
});

module.exports = mongoose.model("Projeto", ProjetoSchema);
