import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: { type: String },
    usuario: { type: Object, required: true },
    senhas: { type: Object}
  }, {collection: "Usuarios"});
  
const usuarios = mongoose.model("Usuarios", usuarioSchema)
  
export default usuarios;