import { Request, Response } from "express";
import { CreateUser, findUserByEmail } from "../modules/user/userService";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcrypt";

export async function cadastro(req: Request, res: Response) {
  const { nome, sobrenome, email, senha } = req.body;

  // Verifica se usuário já existe
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  // Cria usuário
  const userId = await CreateUser(nome, sobrenome, email, senha);
  const token = generateToken(userId);

  res.json({ id: userId, token });
}

export async function login(req: Request, res: Response) {
  const { email, senha } = req.body;

  const user = await findUserByEmail(email);
  if (!user) return res.status(401).json({ message: "Usuário não encontrado" });

  const validPassword = await bcrypt.compare(senha, user.senha);
  if (!validPassword)
    return res.status(401).json({ message: "Senha incorreta" });

  const token = generateToken(user.id);
  res.json({ id: user.id, token });
}
