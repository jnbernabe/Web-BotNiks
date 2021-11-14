let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// create the User Model instance
let userModel = require("../model/users");

let customerModel = require("../model/customers");

let incidentModel = require("../model/incidents");

module.exports.displayHomePage = (req, res, next) => {
  if (err) {
    return console.error(err);
  } else {
    //console.log(customerList);
    res.sendStatus(status);
  }

  // customerModel.find((err, customerList) => {
  //   if (err) {
  //     return console.error(err);
  //   } else {
  //     //console.log(customerList);
  //     res.send(customerList);
  //   }
  // });

  // incidentModel.find((err, incidentList) => {
  //   if (err) {
  //     return console.error(err);
  //   } else {
  //     //console.log(incidentList);
  //     res.send(incidentList);
  //   }
  // });
};
