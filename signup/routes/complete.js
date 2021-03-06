import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  let { name, id, email, phone } = req.query;

  name = !name ? "name error" : name;
  id = !id ? "id error" : id;
  email = !email ? "email error" : email;
  phone = !phone ? "phone error" : phone;

  res.render("complete", {
    name,
    id,
    email,
    phone,
  });
});

module.exports = router;
