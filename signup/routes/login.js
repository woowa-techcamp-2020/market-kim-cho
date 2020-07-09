import express from "express";
import crypto from "crypto";

import login from "../function/login/login";
import idValidator from "../function/validator/idValidator";
import passwordValidator from "../function/validator/passwordValidator";
import getReturnObj from "../function/login/getReturnObj";
import session from "../function/session/session";

const router = express.Router();
const salt = "woowa";

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
  const encryptedPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");

  const retObj = login(id, encryptedPassword);

  if (!retObj.isSuccess) {
    res.send(retObj);
    return;
  }

  const now = `${new Date().getTime()}`;

  const sessionKey = crypto.createHash("sha512").update(now).digest("hex");

  session.setSession(sessionKey, id);
  res.cookie("sessionKey", sessionKey, {
    expires: new Date(Date.now() + 5 * 60 * 1000),
  });
  res.send(retObj);
});

module.exports = router;
