import express from "express";
import usuarios from "./routesUsuario.js";

const router = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Oii, tela principal");
  });

  app.use(express.json(), usuarios);
};

export default router;