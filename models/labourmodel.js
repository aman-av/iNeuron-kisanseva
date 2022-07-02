const mongoose = require("mongoose");
const {Schema} =  mongoose;

const labours = new Schema({
    username: {
        type: String
    },
    duratioin: {
        type: String
    },
    wages:{
        type:Number
    },
    requirement:{
        type:Number
    }
});

mongoose.model('labours',labours);
// module.exports = mongoose.model("users", users);