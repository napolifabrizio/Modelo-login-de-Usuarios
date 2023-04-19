import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const Router = express.Router();

Router
    .get("/usuarios", UsuarioController.listarUsuarios)

export default Router;