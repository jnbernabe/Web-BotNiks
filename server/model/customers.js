//Nandini Hariprasad
//22/12/2021
//Customer Model
let mongoose = require ('mongoose');

//Create model class
let customersModel = mongoose.Schema({

firstName: String,
lastName: String,
email: String,
phoneNumber: String

},
{

    collection: "customers"

});

module.exports = mongoose.model('Customers', customersModel);