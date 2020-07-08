import express from "express";

import session from "../function/session/session";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  const { sessionKey } = req.cookies;

  if (sessionKey !== undefined && session.checkSession(sessionKey)) {
    const userInfo = session.getUserBySession(sessionKey);
    res.render("main.ejs", {
      welcome: `${userInfo.id}님 어서오세요!`,
    });
  } else {
    res.render("main.ejs", { welcome: "사장님, 로그인해주세요!" });
  }
});

module.exports = router;
