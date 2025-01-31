# Product Search RAG

This project is to perform searching on the list of products with human language question.
![Example](docs/example.png)

## Dependencies

### sqlite-vec

Plugin for SQLITE to be able to work on vector data.

## Staring project

1. `pnpm install`
2. `pnpm migrate`
3. `pnpm seed`
4. update the question in the `src/main.mjs`
5. `pnpm start`: to get answer to the question to the AI
