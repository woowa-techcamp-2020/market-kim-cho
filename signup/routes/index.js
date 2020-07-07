import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("main.html");
});

router.get("/login", (req, res) => {
  res.render("login.html");
});

router.get("/signup", (req, res) => {
  res.render("signup.html");
});

router.get("/complete", (req, res) => {
  res.render("complete.html");
});

module.exports = router;
