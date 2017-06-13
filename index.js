var express = require('express');
var http = require('http');
var path = require('path');

// Create Express webapp.
var app = express();

var agent = path.join(__dirname, '/agent/app');
app.use('/agent', express.static(agent));

/**
 * Redirect application by default to agent
 */
app.get('/', function (request, response) {
    response.redirect('/agent');
});

	res.send({"message" : "Success"});

var server = http.createServer(app);
var port = process.env.PORT || 1347;
server.listen(port, () => {
	console.log('Express server running on *:' + port);
});

console.log("Server running at http://localhost:%d", port);