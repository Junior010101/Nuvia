import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const sequelize = new Sequelize(
  process.env.DB_NAME || "nuvia",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "12345678",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);
