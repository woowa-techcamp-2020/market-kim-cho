import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  const {
    name = "name error",
    id = "id error",
    email = "email error",
    phone = "phone error",
  } = req.body;

  res.render("complete.ejs", {
    name,
    id,
    email,
    phone,
  });
});

module.exports = router;
