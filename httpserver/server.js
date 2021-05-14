const http = require('http');
const url = require('url')

http.createServer( (request, response) => {
	console.log('server start');
	response.end('cool');
}).listen(3000);