var express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const db = require("./models");
const sequelize = require("sequelize");

// Create an instance of the express app.
 


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

app.get("/", function(req, res) {
  res.render("index");
});
app.get("/contact", function(req, res) {
  res.render("layouts/contact")
});
app.get("/about", function(req, res) {
  res.render("layouts/about")
});
 



// Here we introduce HTML routing to serve different HTML files
 


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
