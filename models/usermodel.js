const mongoose = require("mongoose");
const {Schema} =  mongoose;

const users = new Schema({
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

mongoose.model('users',users);
// module.exports = mongoose.model("users", users);