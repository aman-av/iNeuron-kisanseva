const router = require('express').Router()
const mongoose = require("mongoose");
const passport = require('passport')
const flash = require('express-flash')
// const User = require('../models/usermodel')
const bcrypt = require('bcryptjs')
const { checkAuthenticated, checkNotAuthenticated } = require('../middleware/auth')
router.use(flash())
require("../models/usermodel");
// require("../models/Date");
const User = mongoose.model("users");
// const Dates = mongoose.model("eventdates");

router.post("/createUser", async (req, res, next) => { // req is request, res is response

    mongoose.connection.on('connecting', function(){
        console.log('connecting');
     });
     
     mongoose.connection.on('connected', function() {
         console.log('connected');
     });
     
     mongoose.connection.on('error', function(err) {
        console.log('error');
         
     });
     
     mongoose.connection.on('disconnected', function() {
        console.log('disconnected');
         
     })
     
        const username=req.body.username
        const password=req.body.password
        const type = req.body.type
        const user = await User.findOne({
            username: username
        })       
        if(user && (user.username!=undefined)) {
            var redir = { redirect: "/" , message:"student already exists" , userName:user.username };	
			return res.json(redir);
        }else{
            let hashedPassword = await bcrypt.hashSync(req.body.password, 10);
            // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        	const newUser = new User({
          		username: req.body.username,
          		password: hashedPassword,
                type:type
                
        	});
        	await newUser.save();
        	var redir = { redirect: "/", message:"New student Created", user: newUser};
        	return res.json(redir);
        } 	
});



module.exports = router