const express = require("express");
const cors = require("cors");
const app = express();

// declaracion de las rutas

const rutas = require("../routes/routes")

//middlewares

app.use(express.json());
app.use(cors());

//Routes
app.use("/api", rutas);



module.exports = app;



