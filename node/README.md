# Simple Node.js lambda

This folder contains a simple Node.js lambda intended to showcase performance differences between Bun and Node.js on AWS Lambda.

## Setup

- [Install Node 20](https://nodejs.org/en/download/package-manager)
- Install dependencies with `npm ci`

## Running locally

To run locally you need to have [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) installed.

Then you can simply run

```bash
npm start
```

The server will be running on [http://localhost:3000](http://localhost:3000)

## Running on AWS

To run on AWS, you will need:
- To have a Node lambda
- To point its entry point to `dist/node/index.mjs`

### Building

To build for AWS run:

```bash
bun run build:aws
```

This will create a zip file in the `dist` folder which is ready to be uploaded to your lambda on AWS.