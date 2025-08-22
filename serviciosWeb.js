const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// 200 Respuesta correcta
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "Solicitud exitosa" });
});

// 201 Recurso creado
app.post("/crear", (req, res) => {
  res.status(201).json({ mensaje: "Recurso creado" });
});

// 300 Redirección
app.get("/redireccion", (req, res) => {
  res.redirect(301, "https://www.google.com");
});

// 400 Error del cliente
app.get("/error-cliente", (req, res) => {
  res.status(400).json({ error: "Solicitud incorrecta" });
});

// 500 Error del servidor
app.get("/error-servidor", (req, res) => {
  throw new Error("Error interno del servidor");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

