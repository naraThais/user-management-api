// src/models/userModel.js
const pool = require("../db"); // Certifique-se de que a conexão com o banco esteja correta

// Função para encontrar usuário pelo email
const findUserByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0]; // Retorna o usuário se encontrado
  } catch (error) {
    throw error; // Caso ocorra um erro, ele será capturado no controller
  }
};

// Função para criar um novo usuário
const createUser = async ({ name, email, password }) => {
  try {
    // Criptografar a senha aqui, se necessário, usando bcrypt (opcional)
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, password] // Use hashedPassword no lugar de password, caso tenha criptografado
    );
    return result.rows[0]; // Retorna o usuário criado
  } catch (error) {
    throw error;
  }
};

// Exportando as funções
module.exports = {
  findUserByEmail,
  createUser,
};
