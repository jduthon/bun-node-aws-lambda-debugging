# Bun and Node.js AWS lambdas troubleshooting

This repository contains two lamdas doing the same work, one with Bun, one with Node.js.

The intent is to help reproducing and troubleshooting performance issues of Bun running on AWS Lambda compared to Node.js.

The [shared directory](./shared/) contains most of the actual code of the lambdas.
The [bun directory](./bun/) contains the setup for the Bun lambda and the [node directory](./node/) for its node equivalent.