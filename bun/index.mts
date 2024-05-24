import { createRequestHandler } from '../shared/responseGenerator';

const { handleRequest } = createRequestHandler();

async function lambdaHandler(_request: Request): Promise<Response> {
  const { body, headers, statusCode } = await handleRequest();
  return new Response(
    body, {
      headers,
      status: statusCode,
    }
  );
}

export default { fetch: lambdaHandler };
