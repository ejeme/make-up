Summary
var express = require ("express");is a dependency which we get by doing a NPM express on the commandline

var app = express();
express is a function and not a constructor,express is an open source code,when the xpress function is run it genenrates an express server and the server is stored on var app.

var PORT = 3000
Declaring a PORT

app.get is initiated whe a route is been created 
"/" means the root
"/yoda" is the file

app.get("/yoda", function(req, res) {
  res.json(yoda);
});
the app.get refers to when someome goes to the yoda route and does a get request ,it would run a function(req,res).
function(req,res) req and res are arguments.

res.json would send back the response to the client as a json file

res inthe request call back takes precedence over res in the get call back.