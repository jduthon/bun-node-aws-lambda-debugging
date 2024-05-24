import { createRequestHandler } from '../shared/responseGenerator.js';

const { handleRequest } = createRequestHandler("Node.js");

export const handler = async () => {
  return handleRequest();
};