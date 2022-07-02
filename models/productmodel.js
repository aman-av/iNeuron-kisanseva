const mongoose = require("mongoose");
const {Schema} =  mongoose;

const products = new Schema({
    username: {
        type: String
    },
    productname: {
        type: String
    },
    price:{
        type:Number
    },
    createdat:{
        type:String
    },
    contactnumber:{
        type:String
    },
    manufacturedate:{
        type:Number
    }
});

mongoose.model('products',products);
// module.exports = mongoose.model("users", users);