// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Controller onde está a lógica do usuário

// Rota para pegar as informações de um usuário
router.get("/", userController.getUser); // Definindo a rota GET /api/user

module.exports = router;
