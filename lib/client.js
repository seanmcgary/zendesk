var _ = require('lodash');
var q = require('q');
var Request = require('./request');

function Client(config){

	this.request = new Request({
		port: 443,
		secure: true,
		host: config.host,
		pathPrefix: ['', 'api', config.apiVersion].join('/'),
		auth: [[config.username, 'token'].join('/'), config.token].join(':')
	});
};

Client.prototype.users = function(){
	var self = this;
	return {
		list: function(){
			return self.request.GET('/users.json');
		},
		get: function(userId){
			return self.request.GET([['/users', userId].join('/'), 'json'].join('.'));
		},
		create: function(data){
			return self.request.POST('/users.json', {}, { user: data });
		},
		search: function(query){
			return self.request.GET('/users/search.json', {
				query: query
			});
		}
	};
};

Client.prototype.tickets = function(){
	var self = this;

	return {
		list: function(){
			return self.request.GET('/tickets.json');
		},
		create: function(data){
			return self.request.POST('/tickets.json', {}, { ticket: data });
		},
		get: function(ticketId){
			return self.request.GET([['/tickets', ticketId].join('/'), 'json'].join('.'));
		},
		updateTicket: function(ticketId, data){
			return self.request.PUT([['/tickets', ticketId].join('/'), 'json'].join('.'), {}, { ticket: data });
		}
	};
};

exports.Client = Client;

