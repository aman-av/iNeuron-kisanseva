const mongoose = require("mongoose");
const {Schema} =  mongoose;

const labours = new Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    rate:{
        type:Number
    },
    availability:{
        type:String
    },
    contactnumber:{
        type:String
    }
});

mongoose.model('labours',labours);
// module.exports = mongoose.model("users", users);