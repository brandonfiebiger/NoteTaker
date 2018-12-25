'use strict';
 
var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 
 
exports.listNotes = (event, context, callback) => {
	var params = {
		TableName : process.env.TABLE_NAME
	};
	documentClient.scan(params, (err, data) => {
		if(err){
		    callback(err, null);
		}else{
		    callback(null, data.Items);
		}
	});
}