const mongoose = require("mongoose");
const router = require('express').Router()
const passport = require('passport')
const flash = require('express-flash')
// const User = require('../models/usermodel')
require("../models/labourmodel");
// require("../models/Date");
const Labour = mongoose.model("labours");

router.use(flash())

router.post("/labourpost",  async(req, res, next) => { // req is request, res is response
        	
				const user = await Labour.findOne({
					username: req.query.id
				})
                
                if(user!==undefined||user!==null)
                {

                
                    const newLabour = await new Labour({
                        username: req.body.username,
                        name: req.body.name,
                        rate:req.body.rate,
                        availability:req.body.availability,
                        contactnumber:req.body.contactnumber,
                      
                  });
      
      
                  await newLabour.save();

                    var redir = { "status":"labour added"};
        	        return res.json(redir);
                
                }else
                {
                    return res.json({"status":"user not found"})
                }
          
        	});

            router.get("/labourget",  async(req, res, next) => { // req is request, res is response
        	
				const user = await Labour.findOne({
					username: req.query.id
				})
                
                if(user!==undefined||user!==null)
                {

                
                   let doc = await Labour.find({username:req.query.id});

                   console.log(doc);

                    var redir = { "status":"success","data":doc};
        	        return res.json(redir);
                
                }else
                {
                    return res.json({"status":"user not found"})
                }
          
        	});

module.exports = router