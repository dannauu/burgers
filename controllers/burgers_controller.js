var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Handler route for getting and displaying all burgers from DB
router.get('/', (req, res) => {
    burger.all((data) => {
        const obj = {
            burgers: data
        }
        console.log(obj);
        res.render('index', obj);
    });
});

//  Handler route for creating new burger in DB
router.post("/api/burgers",(req, res) => {
    console.log(res.body)
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      console.log(result)
      res.json({ id: result.insertId });
    });
  });

  // Handler Route for updating if burger has been devoured
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;