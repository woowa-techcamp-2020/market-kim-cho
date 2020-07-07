import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("login.html");
});

module.exports = router;
