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

router.post("/productpost",  async(req, res, next) => { // req is request, res is response
        	
				const user = await Product.findOne({
					username: req.query.id
				})
                
                if(user!==undefined||user!==null)
                {

                
                    const newProduct = await new Product({
                        username: req.body.username,
                        productname: req.body.productname,
                        price:req.body.price,
                        createdat:req.body.createdat,
                        contactnumber:req.body.contactnumber,
                        manufacturedate:req.body.manufacturedate,
                        sold:false
                      
                  });
      
      
                  await newProduct.save();

                    var redir = { "status":"product added"};
        	        return res.json(redir);
                
                }else
                {
                    return res.json({"status":"user not found"})
                }
          
        	});

            router.get("/productget",  async(req, res, next) => { // req is request, res is response
        	
				const user = await Product.findOne({
					username: req.query.id
				})
                
                if(user!==undefined||user!==null)
                {

                
                   let doc = await Product.find({username:req.query.id});

                   console.log(doc);

                    var redir = { "status":"success","data":doc};
        	        return res.json(redir);
                
                }else
                {
                    return res.json({"status":"user not found"})
                }
          
        	});

module.exports = router