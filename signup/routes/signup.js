import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("signup.html");
});

module.exports = router;
