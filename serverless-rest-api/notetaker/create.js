'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {

  const data = JSON.parse(event.body);

  if (typeof data.content !== 'string' || typeof data.tag !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldnt create the note!'));
    return;
  }

  const params = {
    TableName: 'notetaker',
    Item: {
      id: uuid.v1(),
      content: data.content,
      date: data.date,
      tag: data.tag
    }
  }

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.log(error);
      callback(new Error('Couldnt create note'));
      return;
    }

    const response = {
      statusCode: 201,
      body: JSON.stringify(params.Item),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    callback(null, response);
  })
}