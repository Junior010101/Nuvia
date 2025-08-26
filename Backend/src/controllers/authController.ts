import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken";
import { CreateUser, findUserByEmail } from "../modules/user/userService";

// POST /auth/cadastro
export async function cadastro(req: Request, res: Response) {
  try {
    const { nome, sobrenome, email, senha } = req.body;

    // verifica se usuário já existe
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Usuário já cadastrado" });
    }

    // cria usuário
    const userId = await CreateUser(nome, sobrenome, email, senha);

    // gera token
    const token = generateToken(userId);

    res.status(201).json({ id: userId, token });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Erro no cadastro" });
  }
}

// POST /auth/login
export async function login(req: Request, res: Response) {
  try {
    const { email, senha } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = generateToken(user.id);

    res.json({ id: user.id, token });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Erro no login" });
  }
}
