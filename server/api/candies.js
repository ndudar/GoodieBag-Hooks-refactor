const router = require("express").Router();
const Candy = require("../db/models/Candy");

router.get("/", async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (err) {
    console.log("ERROR IN CANDIES ROUTE:", err);
    next(err);
  }
});

router.get("/:candyId", async (req, res, next) => {
  try {
    const candy = await Candy.findByPk(req.params.candyId);
    res.json(candy);
  } catch (err) {
    console.log("ERROR IN THE SINGLE CANDY ROUTE:", err);
    next(err);
  }
});

module.exports = router;
