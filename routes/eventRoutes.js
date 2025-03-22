const express = require("express");
const { Event } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
});

router.get("/", async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

module.exports = router;
