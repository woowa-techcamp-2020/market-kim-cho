import express from "express";
import crypto from "crypto";

import idValidator from "../function/validator/idValidator";
import passwordValidator from "../function/validator/passwordValidator";
import emailValidator from "../function/validator/emailValidator";
import nameValidator from "../function/validator/nameValidator";
import phoneValidator from "../function/validator/phoneValidator";

import isDuplicated from "../function/signup/isDuplicated";
import getReturnObj from "../function/signup/getReturnObj";

import signup from "../function/signup/signup";

const router = express.Router();
const salt = "woowa";

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("signup.html");
});

/**
 * id의 중복을 검사하는 api
 */
router.post("/duplicate", (req, res) => {
  const { id } = req.body;

  if (isDuplicated(id)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "id";
    retObj.data.errorDetail = "duplicated";

    res.send(retObj);
    return;
  }

  const retObj = getReturnObj();
  retObj.isSuccess = true;
  res.send(retObj);
});

// check id
router.post("/", (req, res, next) => {
  const { id } = req.body;

  if (!idValidator(id)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "id";
    retObj.data.errorDetail = "validator";

    res.send(retObj);
    return;
  }

  if (isDuplicated(id)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "id";
    retObj.data.errorDetail = "duplicated";

    res.send(retObj);
    return;
  }

  next();
});

// check password
router.post("/", (req, res, next) => {
  const { password } = req.body;

  if (!passwordValidator(password)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "password";
    retObj.data.errorDetail = "validator";

    res.send(retObj);
    return;
  }

  next();
});

// check email
router.post("/", (req, res, next) => {
  const { email } = req.body;

  if (!emailValidator(email)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "email";
    retObj.data.errorDetail = "validator";

    res.send(retObj);
    return;
  }
  next();
});

// check name
router.post("/", (req, res, next) => {
  const { name } = req.body;

  if (!nameValidator(name)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "name";
    retObj.data.errorDetail = "validator";

    res.send(retObj);
    return;
  }

  next();
});

// check phone
router.post("/", (req, res, next) => {
  const { phone } = req.body;

  if (!phoneValidator(phone)) {
    const retObj = getReturnObj();
    retObj.isSuccess = false;
    retObj.data.errorPoint = "phone";
    retObj.data.errorDetail = "validator";

    res.send(retObj);
    return;
  }

  next();
});

// save user infomation
router.post("/", (req, res) => {
  const { id, password, email, name, phone } = req.body;
  const retObj = getReturnObj();

  const encryptedPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");

  if (isDuplicated(id)) {
    retObj.isSuccess = false;
    retObj.data.errorPoint = "id";
    retObj.data.errorDetail = "duplicated";

    res.send(retObj);
    return;
  }

  const userObj = signup(id, encryptedPassword, email, name, phone);
  retObj.isSuccess = true;
  retObj.data.userObj = userObj;

  res.send(retObj);
});

module.exports = router;
