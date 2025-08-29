import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import { sequelize } from "./config/sequelize";
import { adminRouter } from "./admin/admin";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

// Rotas
app.use("/auth", authRoutes); // /auth/cadastro, /auth/login
app.use("/admin", adminRouter); // painel AdminJS

// Rotas futuras
// app.use("/atividades", atividadesRoutes);
// app.use("/jogos", jogosRoutes);
// app.use("/materiais", materiaisRoutes);
// app.use("/feedback", feedbackRoutes);
// app.use("/admin", adminRoutes);

// Inicializa Sequelize
sequelize
  .authenticate()
  .then(() => console.log("Banco conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

// Aqui sobe o servidor só depois de testar a conexão
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`🔑 AdminJS em http://localhost:${PORT}/admin`);
});
