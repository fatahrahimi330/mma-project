const express = require("express");
const Fighter = require("../models/Fighter"); // Ensure correct import

const router = express.Router();

// Get all fighters
router.get("/", async (req, res) => {
  try {
    const fighters = await Fighter.findAll();
    res.json(fighters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new fighter
router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging

    const { name, nationality, weightClass } = req.body;

    // Check for missing fields
    if (!name || !nationality || !weightClass) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const fighter = await Fighter.create({
      name,
      nationality,
      weightClass,
    });

    res.status(201).json(fighter);
  } catch (error) {
    console.error("Error creating fighter:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;
