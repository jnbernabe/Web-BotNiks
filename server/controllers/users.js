/*Nandini Hariprasad
11/14/2021
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

// create a reference to the model
let User = require("../model/users");

module.exports.displayUser = (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(userList);
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  /*
    res.render('book/add', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''});
    */
  res.json({ success: true, msg: "Successfully Displayed Add Page" });
};

module.exports.processAddPage = (req, res, next) => {
  let newUser = User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userID: req.body.userID,
    userType: req.body.userType,
  });

  User.create(newUser, (err, User) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      //res.redirect('/book-list');

      res.json({ success: true, msg: "Successfully added new User" });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  User.findOne({ userID: { $eq: id } }, (err, userToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view

      console.log(id);
      res.json(userToEdit);
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedUser = User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userID: req.body.userID,
    userType: req.body.userType,
    created: req.body.created,
    update: req.body.update,
  });

  User.updateOne({ userID: { $eg: id } }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      //res.redirect('/book-list');

      res.json({
        success: true,
        msg: "Successfully edited User",
        user: updatedUser,
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  User.remove({ userID: { $eq: id } }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      //res.redirect('/book-list');

      res.json({ success: true, msg: "Successfully Deleted User" });
    }
  });
};
