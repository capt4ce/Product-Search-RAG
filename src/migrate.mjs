import { init } from "./libs/db.mjs";

const db = init();

const migrate = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT,
      description TEXT
    );
  `);
  db.exec(`
    CREATE VIRTUAL TABLE IF NOT EXISTS products_vss USING vec0(
      vector FLOAT[1536]
    );
  `);
};

migrate();
