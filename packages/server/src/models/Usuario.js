const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  celular: {
    type: String,
    trim: true,
  },
  senha: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
