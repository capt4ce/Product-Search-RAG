import { getEmbedding } from "../../helpers/getEmbedding.mjs";
import { init } from "../../libs/db.mjs";

const db = init();

export const create = async (product) => {
  const vector = await getEmbedding(`${product.name} ${product.description}`);

  db.transaction(() => {
    const productDbResult = db
      .prepare("INSERT INTO products (name, description) VALUES (?, ?)")
      .run(product.name, product.description);

    db.prepare(
      // for some reason passing id in the `run` parameter produces error
      `INSERT INTO products_vss (rowId, vector) VALUES (${productDbResult.lastInsertRowid}, ?)`
    ).run(JSON.stringify(vector));
  })();
};
