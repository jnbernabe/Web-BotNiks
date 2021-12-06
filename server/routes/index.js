//Jamaal Bernabe
//11/11/2021

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

router.get("/", indexController.displayHomePage);

module.exports = router;
