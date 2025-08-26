import path from "path";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const JWT_SECRET: any = process.env.CHAVE_DE_ACESSO;
if (!JWT_SECRET) throw new Error("JWT_SECRET não definido");

interface TokenPayload {
  id: number;
}

export function generateToken(userId: number) {
  return jwt.sign({ id: userId } as TokenPayload, JWT_SECRET, {
    expiresIn: "1h",
  });
}
