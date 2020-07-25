const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String},
    gender:{type:String,enum:["Male","Female"]},
    email:{type:String},
});

module.exports = mongoose.model("User",userSchema);