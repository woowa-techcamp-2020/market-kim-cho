import express from "express";

import session from "../function/session/session";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  const { sessionKey } = req.cookies;

  if (sessionKey !== undefined && session.checkSession(sessionKey)) {
    const userInfo = session.getUserBySession(sessionKey);

    if (userInfo !== undefined) {
      res.render("main", {
        user: `${userInfo.name}`,
        welcome: `님 어서오세요!`,
      });
      return;
    }
  }
  res.render("main", { user: `사장님`, welcome: `로그인해주세요` });
});

module.exports = router;
