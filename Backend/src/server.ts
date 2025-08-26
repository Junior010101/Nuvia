import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/authRoutes";

// aqui entram outras rotas depois: atividades, jogos, materiais, feedback, admin

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(express.json()); // pra ler JSON no body

// Rotas
app.use("/auth", authRoutes); // /auth/cadastro, /auth/login

// Rotas futuras
// app.use("/atividades", atividadesRoutes);
// app.use("/jogos", jogosRoutes);
// app.use("/materiais", materiaisRoutes);
// app.use("/feedback", feedbackRoutes);
// app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
