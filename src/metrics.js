const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require("uuid"); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE
  };

  // fetch all metrics from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the metrics.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });

};

module.exports.create = (event, context, callback) => {
  
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();

  if (typeof data.label !== "string") {
    console.error("Validation Failed");
    
    callback(null, {
      statusCode: 400,
      headers: { "Content-Type": "text/plain" },
      body: "Couldn't create the metric item."
    });
    
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      label: data.label,
      count: 0,
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
        headers: { "Content-Type": "text/plain" },
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