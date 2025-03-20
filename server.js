const express = require("express");
const mongoose = require("mongoose");
const usuarioRoutes = require("../traveling/backend/routes/Usuarios.js");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

app.use(express.json());

app.use((req, res, next) => {
  next();
});

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, "frontend")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conexión a MongoDB establecida"))
  .catch((err) => console.error("Error conectando a MongoDB:", err));

app.use("/Usuarios", usuarioRoutes);

// Ruta para servir el archivo register.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/pages/registro.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Algo salió mal en el servidor" });
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
