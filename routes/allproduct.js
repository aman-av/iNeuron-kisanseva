const mongoose = require("mongoose");
const router = require('express').Router()
const passport = require('passport')
const flash = require('express-flash')
// const User = require('../models/usermodel')
var bcrypt = require('bcryptjs');
require("../models/productmodel");
// require("../models/Date");
const Product = mongoose.model("products");

router.use(flash())

            router.get("/allproduct",  async(req, res, next) => { // req is request, res is response
        	
			

                
                   let doc = await Product.find();

                   console.log(doc);

                    var redir = { "status":"success","data":doc};
        	        return res.json(redir);
                
               
          
        	});

module.exports = router