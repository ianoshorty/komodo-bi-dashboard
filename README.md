# Business Intelligence Dashboard &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ianoshorty/komodo-bi-dashboard/blob/master/LICENSE) [![Maintainability](https://api.codeclimate.com/v1/badges/7fca32b82a21195b29d6/maintainability)](https://codeclimate.com/github/ianoshorty/komodo-bi-dashboard/maintainability) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

This project is aimed at demonstrating how you can create a BI dashboard using Node, AWS and the Serverless framework.

> Note: This project is currently a work in progress.

# Getting Started

Full installation instructions for the project are deteailed in `docs/lesson-1.md` and `docs/lesson-2.md`.

## Prerequisites

 - Node LTS - e.g. `brew install node`
 - The severless framework - e.g. `npm install -g serverless`

# Quick Start

 - `npm install`

Included is a postman collection to allow you to query the deployed API on AWS. To use it, make sure to update the URL based upon what `serverless deploy` tells you!

# CI

// @todo

# Running the tests

 - `npm test`

# Linting and QA

// @todo

# Manual Deployment

 - `serverless deploy`

# Built With

 - Node LTS
 - Serverless Framework
 - AWS
   - Lambda
   - DynamoDB