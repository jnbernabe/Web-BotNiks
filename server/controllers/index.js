let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// create the User Model instance
let userModel = require("../model/users");
let User = userModel.User; // alias
