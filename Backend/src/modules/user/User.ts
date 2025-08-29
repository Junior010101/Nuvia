import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize";

export class User extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public senha!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "usuarios",
    sequelize,
    timestamps: true,
    createdAt: "criado_em",
    updatedAt: false,
  }
);
