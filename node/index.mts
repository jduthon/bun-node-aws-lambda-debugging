import { createRequestHandler } from '../shared/responseGenerator.js';

const { handleRequest } = createRequestHandler();

export const handler = async () => {
  return handleRequest();
};