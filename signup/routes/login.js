import express from "express";
import login from "../function/login/login";
import idValidator from "../function/validator/idValidator";
import passwordValidator from "../function/validator/passwordValidator";
import getReturnObj from "../function/login/getReturnObj";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("login.html");
});

router.post("/", (req, res, next) => {
  const { id } = req.body;

  if (idValidator(id)) {
    next();
  } else {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.isIdError = true;
    res.send(retObj);
  }
});

router.post("/", (req, res, next) => {
  const { password } = req.body;

  if (passwordValidator(password)) {
    next();
  } else {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.isPasswordError = true;
    res.send(retObj);
  }
});

router.post("/", (req, res) => {
  const { id, password } = req.body;
  const retObj = login(id, password);
  res.send(retObj);
});

module.exports = router;
