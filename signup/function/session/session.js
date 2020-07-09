const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/**
 * 로그인 시 session을 저장하는 함수
 * @param {string} sessionKey
 * @param {string} id
 */
function setSession(sessionKey, id) {
  const adapter = new FileSync("./db/db.json");
  const db = low(adapter);

  if (sessionKey === "" || typeof sessionKey !== "string") return false;

  const now = new Date().getTime();
  db.get("session").push({ key: sessionKey, id, time: now }).write();

  return true;
}

/**
 * sessionKey가 유효한지 검사하는 함수
 * @param {string} sessionKey
 */
function checkSession(sessionKey) {
  const adapter = new FileSync("./db/db.json");
  const db = low(adapter);

  if (sessionKey === "" || typeof sessionKey !== "string") return false;

  const now = new Date().getTime();
  const session = db.get("session").find({ key: sessionKey }).value();

  if (session === undefined) {
    return false;
  }

  if (session.time + 5 * 60 * 1000 < now) {
    db.get("session").find({ key: sessionKey }).write();
    return false;
  }

  return true;
}

/**
 * sessionKey로 접속한 유저를 찾는 함수
 * @param {string} sessionKey
 */
function getUserBySession(sessionKey) {
  const adapter = new FileSync("./db/db.json");
  const db = low(adapter);

  if (sessionKey === "" || typeof sessionKey !== "string") return undefined;

  const session = db.get("session").find({ key: sessionKey }).value();

  return db.get("users").find({ id: session.id }).value();
}

export default { setSession, checkSession, getUserBySession };
