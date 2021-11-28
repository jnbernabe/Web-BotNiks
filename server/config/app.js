//Jamaal Bernabe
//11/11/2021

// installed 3rd party packages
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

// modules for authentication
let session = require("express-session");
let passport = require("passport");

let passportJWT = require("passport-jwt");
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require("passport-local");
let localStrategy = passportLocal.Strategy;
let flash = require("connect-flash");

// database setup
let mongoose = require("mongoose");
let DB = require("./db");

// point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

// create a Incident Model Instance
let incidentsModel = require("../model/incidents");

//create a User Model Instance
let userModel = require("../model/users");
let User = userModel.User;

//create a User Model Instance
let customersModel = require("../model/customers");

//Routers
let incidentRouter = require("../routes/incidents");
let indexRouter = require("../routes/index");
let userRouter = require("../routes/users");
let CustomerRouter = require("../routes/customers");

let app = express();

// routing

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs"); // express  -e

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));
app.use(cors());
//app.options("*", cors());

//setup express session
app.use(
  session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// initialize flash
app.use(flash());

app.use("/api", indexRouter);
app.use("/api/user", userRouter);
app.use("/api/incident", incidentRouter);
app.use("/api/customer", CustomerRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// // initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport user configuration

// implement a User Authentication Strategy
passport.use(User.createStrategy());

let local = passport.use(
  new localStrategy(function (email, password, done) {
    console.log(email);
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect Email." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

// // serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findOne({
    email: { $eq: jwt_payload.email }
      .then((user) => {
        console.log(user);
        return done(null, user);
      })
      .catch((err) => {
        return done(err, false);
      }),
  });
});

passport.use(strategy);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
