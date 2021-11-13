let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let incidentController = require("../controllers/incidents");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/", incidentController.displayIncident);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/create-incident", incidentController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/create-incident", incidentController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/create-incident/:id", incidentController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/create-incident/:id", incidentController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", incidentController.performDelete);

module.exports = router;
