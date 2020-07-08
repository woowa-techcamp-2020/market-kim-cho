import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export default function initializeDb() {
  const adapter = new FileSync("./db/db.json");
  const db = low(adapter);
  db.defaults({ users: [], session: [] }).write();
}
