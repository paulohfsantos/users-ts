import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/postgres";

interface UserAttributes extends Model {
  id?: number;
  name: string;
  age: number;
}

const userTable = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
  }
}

const userProperties = {
  tableName: "users",
  timestamps: false,
}

export const User = sequelize.define<
  UserAttributes
>("User", userTable, userProperties);