//Jamaal Bernabe
//11/11/2021

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

// create a reference to the model
let Incident = require("../model/incidents");

module.exports.displayIncident = (req, res, next) => {
  Incident.find((err, incidentList) => {
    if (err) {
      return console.error(err);
    } else {
      res.send(incidentList);
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  /*
    res.render('book/add', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''});
    */
  res.send({ success: true, msg: "Succesfully Displayed Add Page" });
};

module.exports.processAddPage = (req, res, next) => {
  let newIncident = Incident({
    incidentID: req.body.incidentID,
    priority: req.body.priority,
    status: req.body.status,
    userName: req.body.userName,
    description: req.body.description,
    narrative: req.body.narrative,
    dateCreated: req.body.dateCreated,
    //dateModified: req.body.Datenow,
    resolutionField: req.body.resolutionField,
    customerName: req.body.customerName,
  });

  Incident.create(newIncident, (err, Incident) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      //res.redirect('/book-list');

      res.json({ success: true, msg: "Successfully Added New Incident" });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Incident.findOne({ incidentID: { $eq: id } }, (err, incidentToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);

      console.log(id);
      res.send({
        success: true,
        msg: "Successfully Displayed Incident to Edit",
        incident: incidentToEdit,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedIncident = {
    incidentID: id,
    priority: req.body.priority,
    status: req.body.status,
    userName: req.body.userName,
    description: req.body.description,
    narrative: req.body.narrative,
    dateCreated: req.body.dateCreated,
    //dateModified: req.body.Datenow,
    resolutionField: req.body.resolutionField,
    customerName: req.body.customerName,
  };

  Incident.updateOne({ incidentID: { $eq: id } }, updatedIncident, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.send({
        success: true,
        msg: "Successfully Edited Incident",
        incident: updatedIncident,
      });
    }
  });
};

//   Incident.updateOne({ incidentID: { $eq: id } }, updatedIncident, (err) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       res.send({
//         success: true,
//         msg: "Successfully Edited Incident",
//         incident: updatedIncident,
//       });
//     }
//   });
// };

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Incident.remove({ incidentID: { $eq: id } }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.send({ success: true, msg: "Successfully Deleted Incident" });
    }
  });
};
