// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    //GET route that sends our handlebars index page
    app.get("/", function (req, res) {
        db.Burger.findAll({ include: [db.Customer] })
            .then(function (data) {
                console.log("\n Here's some new: " + JSON.stringify(data, null, 2) +"--------\n");
                var handlebarsObj = {
                    burgers: data
                };
                res.render("index", handlebarsObj);
            });
    });


    // GET route for getting all of the burgers
    app.get("/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    // POST route for saving a new burger. 
    app.post("/api/burgers/", function (req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
        }).then(function (result) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(result);
        }).catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
    });

    // POST route for saving a new customer. 
    app.post("/api/customers/", function (req, res) {
        console.log(req.body);
        db.Customer.create({
            name: req.body.name,
            BurgerId: req.body.BurgerId
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            res.json(err);
        });
    });


    // PUT route for updating. 
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};
