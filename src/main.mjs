import openai from "./libs/openai.mjs";
import { search } from "./services/product/search.mjs";

const question = "what computer accessory is suitable if my laptop overheats?";

const ask = async (question) => {
  console.log("Question:\n", question);
  console.log("\n");
  const relatedProducts = (await search(question))
    .map((product, idx) => `${idx + 1}.${product.name}: ${product.description}`)
    .join("\n");
  console.log("Related products:\n", relatedProducts);
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that answers questions based on the provided product data.",
      },
      {
        role: "user",
        content: `
                Product Data: ${relatedProducts}

                Question: ${question}

                Please answer the question using information from the product data.
            `,
      },
    ],
    // You can adjust max tokens based on your needs
    max_tokens: 16000, // GPT-4o mini supports up to 16K output tokens
  });
  console.log("\n");
  return "Answer:\n" + response.choices[0].message.content;
};

console.log(await ask(question));
