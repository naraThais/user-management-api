// src/controllers/userController.js

const getUser = (req, res) => {
  // Aqui você pode implementar a lógica para pegar o usuário do banco de dados ou apenas retornar um mock
  const user = {
    id: 1,
    name: "Thais Nara",
    email: "thais@example.com",
  };

  res.status(200).json(user); // Retornando as informações do usuário
};

module.exports = {
  getUser,
};
