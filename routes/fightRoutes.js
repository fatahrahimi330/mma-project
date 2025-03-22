const express = require("express");
const { Fight, Fighter } = require("../models");

const router = express.Router();

const K_FACTOR = 32; // Adjust ranking changes

const updateRankings = async (winner, loser) => {
  const probabilityWinner =
    1 / (1 + Math.pow(10, (loser.ranking - winner.ranking) / 400));
  const probabilityLoser = 1 - probabilityWinner;

  winner.ranking += K_FACTOR * (1 - probabilityWinner);
  loser.ranking += K_FACTOR * (0 - probabilityLoser);

  await winner.save();
  await loser.save();
};

router.post("/", async (req, res) => {
  const { fighter1Id, fighter2Id, eventId, result, winType } = req.body;

  // Check if both fighters exist
  const fighter1 = await Fighter.findByPk(fighter1Id);
  const fighter2 = await Fighter.findByPk(fighter2Id);

  if (!fighter1 || !fighter2) {
    return res
      .status(400)
      .json({ error: "One or both fighters do not exist." });
  }

  // Create fight
  const fight = await Fight.create({
    fighter1Id,
    fighter2Id,
    eventId,
    result,
    winType,
  });

  const winner = result === "fighter1" ? fighter1 : fighter2;
  const loser = result === "fighter1" ? fighter2 : fighter1;

  winner.wins++;
  loser.losses++;
  if (winType === "KO") winner.knockouts++;
  if (winType === "Submission") winner.submissions++;

  await winner.save();
  await loser.save();

  // Update rankings
  await updateRankings(winner, loser);

  res.json(fight);
});
router.get("/", async (req, res) => {
  const fights = await Fight.findAll();
  res.json(fights);
});
module.exports = router;
