const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para manejar el formulario
app.post("/enviar", (req, res) => {
  console.log(" Datos recibidos:", req.body);
  res.json({ mensaje: "Formulario recibido correctamente." });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log(" Servidor escuchando en http://localhost:3000");
});
