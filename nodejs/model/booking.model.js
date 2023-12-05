import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../confige/db.confige.js";

const booked = sequelize.define(
  "bookingBus",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.INTEGER, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    TravelDate: { type: DataTypes.STRING, allowNull: false },
    adult: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "bookingBus",
    timestamps: true, // Move this option inside the same object
  }
);

booked.sync();

export default booked;
