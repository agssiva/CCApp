var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

// Create Express webapp.
var app = express();
var router = express.Router(); 

var agent = path.join(__dirname, '/agent/app');

// This will help us to get the data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(agent));

/**
 * Redirect application by default to agent
 */
app.get('/', function (request, response) {
    //response.redirect('/agent');
});

router.get('/login', (req, res) => {
	res.send({"message" : "Success", "status": true});
});

// Register routes
// All API should start with api/
app.use('/api', router);

var server = http.createServer(app);
var port = process.env.PORT || 1347;
server.listen(port, () => {
	console.log('Express server running on *:' + port);
});

console.log("Server running at http://localhost:%d", port);