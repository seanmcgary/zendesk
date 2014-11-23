var _ = require('lodash');
var q = require('q');
var Request = require('./request');

function Client(config){
	console.log(config);
	
	this.request = new Request({
		port: 443,
		secure: true
	});
};

exports.Client = Client;

