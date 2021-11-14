/* Hetu Shiroya
13/11/2021 
Student ID: 301204148 */

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let customerController = require("../controllers/customers");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/", customerController.displayCustomer);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", customerController.displayAddCustomer);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", customerController.processAddCustomer);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", customerController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", customerController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", customerController.performDelete);

module.exports = router;
