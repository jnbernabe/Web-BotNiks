//Nandini Hariprasad
//22/12/2021
//Report Model
let UserModel = require("./users");
let UserIn = UserModel.User;
let CustomerModel = require("./customers");
let CustomerIn = CustomerModel.Customer;
let mongoose = require("mongoose");

//Create model class
let incidentsModel = mongoose.Schema(
  {
    incidentID: String,
    priority: String,
    status: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    description: String,
    narrative: String,
    dateCreated: Date,
    dateModified: Date,
    resolutionField: String,
    User: { type: Object, ref: UserModel },
    Customer: { type: Object, ref: CustomerModel },
  },
  {
    collection: "incidents",
  }
);

module.exports = mongoose.model("Incidents", incidentsModel);
