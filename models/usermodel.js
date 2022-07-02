const mongoose = require("mongoose");
const users = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type:{
        type:String
    }
});

module.exports = mongoose.model("User", users);