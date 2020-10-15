const mongoose = require("mongoose");

const AtividadeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  descricao: String,
  dataInicio: String,
  dataFim: String,
  projeto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projeto",
    require: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

module.exports = mongoose.model("Atividade", AtividadeSchema);
