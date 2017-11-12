const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BehaviorSchema = new Schema({
  name: String,
  definition: String,
  frequency: String
});


module.exports = BehaviorSchema;
