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
        	
				
                
                    const newLabour = await new Labour({
                        username: req.body.username,
                        duration: req.body.duration,
                        wages:req.body.wages,
                        requirement:req.body.requirement,
                      
                  });
      
      
                  await newLabour.save();

                    var redir = { "status":"labour added"};
        	        return res.json(redir);
                
          
        	});

            router.post("/labourupdate",  async(req, res, next) => { // req is request, res is response
        	
				
                let username = req.body.username
                let count = req.body.count

                let user = Labour.findOne({
                    username:username
                })
                if(user!==undefined||user!==null)
                {

                
                   let doc = await Labour.updateOne({username:username},{$inc:{
                    requirement:-1*count
                   }});

                   

                    var redir = { "status":"updated"};
        	        return res.json(redir);
                
                }else
                {
                    return res.json({"status":"user not found"})
                }
          
        	});

module.exports = router