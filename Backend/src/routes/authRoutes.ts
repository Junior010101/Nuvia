import { Router } from "express";
import { cadastro, login } from "../controllers/authController";

const router = Router();

// Rotas de autenticação
router.post("/cadastro", cadastro); // POST /auth/cadastro
router.post("/login", login); // POST /auth/login

export default router;
