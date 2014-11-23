var zendesk = require('../');

var client = new zendesk.Client({
	username: '',
	token: '',
	host: '',
	apiVersion: 'v2'
});

client.tickets().get(4104)
.then(function(ticket){
	console.log(ticket.ticket);
}, function(){
	console.log(arguments);
});
