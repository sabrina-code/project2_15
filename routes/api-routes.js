var db = require("../models");

// Routes
module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.User.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Add a user
  app.post("/api/new", function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      createdAt: req.body.createdAt
    }).then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
    });
  });
};