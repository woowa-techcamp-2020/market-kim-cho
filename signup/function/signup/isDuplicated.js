const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

export default function isDuplicated(id) {
  const adapter = new FileSync("./db/db.json");
  const db = low(adapter);

  const userInfo = db.get("users").find({ id }).value();

  if (userInfo === undefined) {
    return false;
  }

  return true;
}
