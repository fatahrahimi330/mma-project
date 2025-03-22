const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Fighter = sequelize.define("Fighter", {
  name: { type: DataTypes.STRING, allowNull: false },
  nationality: { type: DataTypes.STRING, allowNull: false },
  weightClass: { type: DataTypes.STRING, allowNull: false },
  wins: { type: DataTypes.INTEGER, defaultValue: 0 },
  losses: { type: DataTypes.INTEGER, defaultValue: 0 },
  knockouts: { type: DataTypes.INTEGER, defaultValue: 0 },
  submissions: { type: DataTypes.INTEGER, defaultValue: 0 },
  ranking: { type: DataTypes.INTEGER, defaultValue: 1000 }, // ELO-like ranking
});

module.exports = Fighter;
