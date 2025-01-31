import { getEmbedding } from "../../helpers/getEmbedding.mjs";
import { init } from "../../libs/db.mjs";

const db = init();

export const search = async (text) => {
  const vector = await getEmbedding(text);
  const searchQuery = db.prepare(`
      WITH matching_products AS (
        SELECT rowid
        FROM products_vss
        WHERE vector match ?
        AND distance < 1.5
        AND k = 10
        ORDER BY distance ASC
      )
      SELECT p.*
      FROM products p
      INNER JOIN matching_products mp ON p.id = mp.rowid
      limit 5
    `);

  return searchQuery.all(JSON.stringify(vector));
};
