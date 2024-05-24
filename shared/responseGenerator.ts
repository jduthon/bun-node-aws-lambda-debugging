import { displayMetObject, getRandomSunflowerArt } from './metApiUtils.js';

export const createRequestHandler = () => {
  let numberOfRequestsHandled = 0;

  return {
    handleRequest: async () => {
      const randomSunflowerArt = await getRandomSunflowerArt();
      console.log('HELLOOOOOO', randomSunflowerArt);
      const displayedArt = randomSunflowerArt ? displayMetObject(randomSunflowerArt) : '';
      const response = {
        body: `<html><body>Hello world from Bun3! ${Date.now()}<div>Number of requests handled by this instance: ${numberOfRequestsHandled}</div>${displayedArt}</body></html>`,
        headers: { 'Content-Type': 'text/html' },
        statusCode: 200,
      };
      numberOfRequestsHandled += 1;
      return response;
    }
  }
}