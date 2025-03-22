const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Fighter = require("./Fighter");
const Event = require("./Event");

const Fight = sequelize.define("Fight", {
  result: { type: DataTypes.STRING, allowNull: false }, // "fighter1" or "fighter2"
  winType: { type: DataTypes.STRING, allowNull: false }, // KO, Submission, Decision
});

Fight.belongsTo(Fighter, { as: "fighter1" });
Fight.belongsTo(Fighter, { as: "fighter2" });
Fight.belongsTo(Event);

module.exports = Fight;
