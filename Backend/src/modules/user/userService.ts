import { User } from "./User";
import bcrypt from "bcrypt";

export async function CreateUser(
  nome: string,
  sobrenome: string,
  email: string,
  senha: string
) {
  const hashedPassword = await bcrypt.hash(senha, 10);
  const user = await User.create({
    nome: nome + " " + sobrenome,
    email,
    senha: hashedPassword,
  });
  return user.id;
}

export async function findUserByEmail(email: string) {
  return User.findOne({ where: { email } });
}
