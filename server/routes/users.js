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
router.get(
  "/add",
  passport.authenticate("jwt", { session: false }),
  userController.displayAddPage
);

/* POST Route for processing the Add page - CREATE Operation */
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  userController.processAddPage
);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  userController.displayEditPage
);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  userController.processEditPage
);

/* GET to perform  Deletion - DELETE Operation */
router.get(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  userController.performDelete
);

router.post("/login", userController.processLoginPage);

/* POST Route for processing the Register page */
router.post("/register", userController.processRegisterPage);

/* GET to perform UserLogout */
router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  userController.performLogout
);

module.exports = router;
