import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fabrizioestudarprog:napoli510@login-usuarios.5smtbd7.mongodb.net/ModeloLogin")

const db = mongoose.connection;

export default db;