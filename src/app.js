import express from "express";
import Router from "./routes/routesIndex.js";
import db from "./config/dbconnect.js";

const app = express()

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("A conexão com o banco realizada com sucesso");
});

Router(app);

export default app;