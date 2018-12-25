'use strict';
 
const AWS = require('aws-sdk'),
	uuid = require('uuid'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 
 
exports.createNote = (event, context, callback) => {
	const params = {
		Item : {
			id : uuid.v1(),
			"Content" : event.Content,
			"Tag" : event.Tag,
			"Date": event.Date
		},
		TableName : process.env.TABLE_NAME
	};
	let response = {
		statusCode: 201,
		message: "Note successfully created."
	}
	documentClient.put(params, (err, data) => {
		callback(err, response);
	});
}