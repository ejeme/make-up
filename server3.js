// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
//this datatype is an array of objects

var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
//this prints the json of every character,
//"/api/character" is an api route and used for clarity
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do?
//this route,the second character is an actual character name
app.get("/api/characters/:character", function(req, res) {
  // What does this code do?
  //The console.log(chosen)woud show on the client side
  var chosen = req.params.character;
  console.log(chosen);
//so instead of doing a for loop an array.find is used
  var foundCharacter = characters.find(function(el){
    return el.routeName === chosen;
  })

  // What does this code do?
  return res.send(foundCharacter || "No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
