import { db } from "../../config/database";
import bcrypt from "bcrypt";

export async function CreateUser(
  nome: string,
  sobrenome: string,
  email: string,
  senha: string
): Promise<any> {
  const hashedPassword = await bcrypt.hash(senha, 10);

  const [result]: any = await db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome + " " + sobrenome, email, hashedPassword]
  );

  return result.insertId;
}

export async function findUserByEmail(email: string) {
  const [rows]: any = await db.query("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);
  return rows[0];
}
