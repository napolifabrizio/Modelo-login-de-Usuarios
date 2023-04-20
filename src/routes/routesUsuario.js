import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const Router = express.Router();

Router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .post("/usuarios", UsuarioController.cadastrarUsuario)
    .put("/usuarios/:id", UsuarioController.cadastrarSenhasUsuario)
    .delete("/usuarios/:id", UsuarioController.deletarUsuario)


export default Router;