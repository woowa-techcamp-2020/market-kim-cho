import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("./db/db.json");
const db = low(adapter);

/**
 * 입력받은 인자를 바탕으로 lowdb에 회원정보를 저장함
 * @param {string} id 아이디
 * @param {string} password 비밀번호
 * @param {string} email 이메일
 * @param {string} name 이름
 * @param {string} phone 전화번호
 */
export default function signup(id, password, email, name, phone) {
  const userObj = {
    id,
    password,
    email,
    name,
    phone,
  };

  db.get("users").push(userObj).write();

  return userObj;
}
