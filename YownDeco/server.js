var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write('<!DOCTYPE html>'+
	'<html>'+
	'<head>'+
		'<meta charset="utf-8"/>'+
		'<script type="text/javascript" lang="Javascript" src="/YownDeco/PQuerik/PQuerik.js"></script>'+		
		'<title>My Node.js</title>'+
		'<div class="DropDownContainer" id="DropDownContainer"></div>' + 
		'<div class="GridContainer" id="GridContainer"></div>' + 
	'</head>'+
	'<body>'+
	'</html>');
	res.end("");
});

server.listen(8100);

// To access server enter 