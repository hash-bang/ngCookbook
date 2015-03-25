#!/usr/bin/env node
/**
* Extremely simple static website serving script
* This is provided in case you need to deploy to something like Heroku
*
* Install + run:
*
*		bower install
*		npm install
*		node server
*
*/


var express = require('express');
global.app = express();
app.use(express.static(__dirname));
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.send(500, 'Something broke!').end();
});

var port = process.env.PORT || process.env.VMC_APP_PORT || 80;
var server = app.listen(port, function() {
	console.log('Web interface listening on port', port);
});
