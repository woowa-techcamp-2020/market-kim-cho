import getReturnObj from "./getReturnObj";

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/db.json");
const db = low(adapter);

export default function login(id, password) {
  const retObj = getReturnObj();
  const userInfo = db.get("users").find({ id }).value();
  if (userInfo === undefined) {
    retObj.data.isIdError = true;
    return retObj;
  }

  if (userInfo.password !== password) {
    retObj.data.isPasswordError = true;
    return retObj;
  }

  retObj.isSuccess = true;
  return retObj;
}
