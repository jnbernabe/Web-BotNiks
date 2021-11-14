/* Nandini Hariprasad
11/14/2021
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let userController = require("../controllers/users");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the User List page - READ Operation */
router.get("/", userController.displayUser);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/user", userController.displayAddUser);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/user", userController.processAddUser);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/user/:id", userController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/user/:id", userrController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", userController.performDelete);

module.exports = router;
