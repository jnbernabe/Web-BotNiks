/*Nandini Hariprasad
11/14/2021

Jamaal Bernabe
11/28/2021
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");
let jwt = require("jsonwebtoken");
let DB = require("../config/db");
let passportLocalMongoose = require("passport-local-mongoose");

// create a reference to the model
let Model = require("../model/users");
let User = Model.User;

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

module.exports.processLoginPage = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      console.log(err);
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }

      const payload = {
        email: user.email,
        displayName: user.displayName,
        userID: user.userID,
      };

      const authToken = jwt.sign(payload, DB.Secret, {
        expiresIn: 604800, // 1 week
      });
      //console.log(authToken);
      return res.json({
        success: true,
        msg: "User Logged in Successfully!",
        user: {
          email: user.email,
          displayName: user.displayName,
          userID: user.userID,
        },
        token: authToken,
      });
    });
  })(req, res, next);
  // const { email, password } = req.body;
  // //console.log(email, password, "server");
  // const user = await User.findOne({ email: email }).catch(
  //   console.log("Waiting for Response")
  // );

  // if (!user) {
  //   console.log("No User Found");
  //   res.status(403);
  // } else {
  //   //console.log(user);
  //   if (password == user.password) {
  //     // Sign token
  //     const token = jwt.sign({ email, password }, DB.Secret, {
  //       expiresIn: 1000000,
  //     });
  //     res.status(200);
  //     return res.json({ success: true, token: token, user: user });
  //   } else {
  //     console.log("Wrong Password");
  //     res.status(404).send("Something broke!");
  //   }
  // }
};

module.exports.processRegisterPage = async (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    password: req.body.password,
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userID: req.body.userID,
    userType: req.body.userType,
  });
  // User.register(newUser, req.body.password, (err) => {
  //   if (err) {
  //     console.log("Error: Inserting New User");
  //     if (err.name == "UserExistsError") {
  //       req.flash(
  //         "registerMessage",
  //         "Registration Error: User Already Exists!"
  //       );
  //       console.log("Error: User Already Exists!");
  //     }
  //     return res.render("auth/register", {
  //       title: "Register",
  //       messages: req.flash("registerMessage"),
  //       username: req.user ? req.user.username : "",
  //     });
  //   } else {
  //     return passport.authenticate("local")(req, res, () => {
  //       res.redirect("/");
  //     });
  //   }
  // });

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log(user);
    console.log("That user already exisits!");
    return res.status(400);
  }
  //Insert the new user if they do not exist yet
  await newUser.save();
  const payload = {
    email: req.body.email,
    username: req.body.username,
    userID: req.body.userID,
  };
  const authToken = jwt.sign(payload, DB.Secret, {
    expiresIn: 604800, // 1 week
  });

  res.json(authToken);
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  //res.redirect('/');
  res.json({ success: true, msg: "User Successfully Logged out!" });
};
