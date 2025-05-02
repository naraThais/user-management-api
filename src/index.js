const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // ⬅️ Importando as rotas de usuário

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // ⬅️ Verifique essa linha
app.use("/api/user", userRoutes); // ⬅️ Adicionando as rotas de usuário
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
