'use strict';
 
const AWS = require('aws-sdk'),
	uuid = require('uuid'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 
 
exports.deleteNote = (event, context, callback) => {
	const params = {
		Key : {
			id : event.id
		},
		TableName : process.env.TABLE_NAME
	};
	let response = {
		statusCode: 202,
		message: `Note with id of ${event.id} has been successfully deleted.`
	}
	documentClient.delete(params, (err, data) => {
		callback(err, response);
	});
}
