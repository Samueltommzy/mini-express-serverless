"use strict";

const mongoose = require("mongoose");
const config   = require("../config");

class DBConnection {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect(config.DB_URI,{ 
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            autoIndex:true
        })
        .then(()=>{
            console.log("db connection successful");
        })
        .catch((err)=>err);
    }
}

module.exports = new DBConnection();