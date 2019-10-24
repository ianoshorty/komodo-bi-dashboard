const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default (event, context, callback) => {
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();

  if (typeof data.label !== 'string') {
    console.error('Validation Failed');

    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: "Couldn't create the metric item."
    });

    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      label: data.label,
      metricCount: 0,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  };

  // write the todo to the database
  dynamoDb.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't create the metric item."
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};
