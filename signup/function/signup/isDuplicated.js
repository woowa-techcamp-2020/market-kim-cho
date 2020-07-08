const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/db.json");
const db = low(adapter);

export default function isDuplicated(id) {
  const userInfo = db.get("users").find({ id }).value();

  if (userInfo === undefined) {
    return false;
  }

  if (userInfo.id === id) {
    return false;
  }

  return true;
}
