let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

router.get("/", indexController.displayHomePage);
