# Simple Bun lambda

This folder contains a simple Bun lambda intended to showcase performance differences between Bun and Node.js on AWS Lambda.

## Setup

- [Install Bun](https://bun.sh/docs/installation)
- Install dependencies with `bun install`

## Running locally

To run locally, you run

```bash
bun start
```

The server will then be running on [http://localhost:3001](http://localhost:3001)

## Running on AWS

To run on AWS, you will need:
- To have a lambda capable of running Bun, see instructions on [the official repo](https://github.com/oven-sh/bun/tree/main/packages/bun-lambda)

### Building

To build for aws run:

```bash
bun run build:aws
```

This will create a zip file in the `dist` folder which is ready to be uploaded to your lambda on AWS.