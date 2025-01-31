import Database from "better-sqlite3";
import * as sqliteVec from "sqlite-vec";

export const init = () => {
  const db = new Database("vector-database.sqlite");
  db.pragma("journal_mode = WAL");
  sqliteVec.load(db);
  return db;
};
