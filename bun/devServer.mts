import lambdaHandler from './index.mts';

const { fetch } = lambdaHandler;

const server = Bun.serve({
  port: 3001,
  fetch,
});

console.log(`Listening on http://localhost:${server.port} ...`);