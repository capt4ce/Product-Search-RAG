import openai from "../libs/openai.mjs";

export const getEmbedding = async (text) => {
  const stringRaw = text.replace(/[\n\r]/g, " ");
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: stringRaw,
  });

  return response.data[0].embedding;
};
