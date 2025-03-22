const sequelize = require("../config/database");
const Fighter = require("./Fighter");
const Event = require("./Event");
const Fight = require("./Fight");

const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced successfully!");
};

module.exports = { Fighter, Event, Fight, syncDatabase };
