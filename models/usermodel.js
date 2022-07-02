const mongoose = require("mongoose");
const user = new mongoose.Schema({
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

module.exports = mongoose.model("User", user);