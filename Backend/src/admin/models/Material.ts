import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize";

export class Material extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public filename!: string;
}

Material.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING(50) },
    filename: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "materials", sequelize }
);
