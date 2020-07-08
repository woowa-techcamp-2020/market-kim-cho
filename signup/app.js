import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import initializeDb from "./db/dbInitializor";
import session from "./function/session/session";

const indexRouter = require("./routes/index");
const completeRouter = require("./routes/complete");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");

const app = express();
initializeDb();
// view 경로 설정
app.set("views", path.join(__dirname, "views"));

// 화면 engine을 ejs로 설정
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "function")));

app.get("/", (req, res, next) => {
  const { sessionKey } = req.cookies;

  if (sessionKey === undefined) {
    next();
    return;
  }
  session.checkSession(sessionKey);
  next();
});

app.use("/", indexRouter);
app.use("/complete", completeRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.render("404.html");
});

module.exports = app;
