//Nandini Hariprasad
//22/12/2021
//Incident Model
let mongoose = require("mongoose");

//Create model class
let incidentsModel = mongoose.Schema(
  {
    incidentID: String,
    priority: String,
    status: String,
    userName: String,
    description: String,
    narrative: String,
    dateCreated: String,
    resolutionField: String,
    customerName: String,
  },
  {
    collection: "incidents",
  }
);

module.exports = mongoose.model("Incidents", incidentsModel);
