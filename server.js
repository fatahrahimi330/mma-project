require("dotenv").config();
const express = require("express");
const { syncDatabase } = require("./models");
const fighterRoutes = require("./routes/fighterRoutes");
const eventRoutes = require("./routes/eventRoutes");
const fightRoutes = require("./routes/fightRoutes");

const app = express();
app.use(express.json());

app.use("/fighters", fighterRoutes);
app.use("/events", eventRoutes);
app.use("/fights", fightRoutes);

// Sync DB on startup
syncDatabase();

app.listen(5000, () => console.log("Server running on port 5000"));
