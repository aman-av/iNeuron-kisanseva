const mongoose = require("mongoose");
const router = require('express').Router()
const passport = require('passport')
const flash = require('express-flash')
// const User = require('../models/usermodel')
var bcrypt = require('bcryptjs');
require("../models/usermodel");
// require("../models/Date");
const User = mongoose.model("users");

router.use(flash())

router.post("/login",  async(req, res, next) => { // req is request, res is response
    
            
        	
				const user = await User.findOne({
					username: req.body.username
				})
             delete user.password;
                let auth = bcrypt.compareSync( req.body.password , user["password"] )
				if(auth && user.type==="farmer")
				{
					var redir = { redirect: "/login" , message:"farmer Login Successfully" , userName:req.user.username , user: user};
		        }else if(auth &&  user.type==="labour")
				{
          			var redir = { redirect: "/login" , message:"labour Login Successfully" , userName:req.user.username , user: user};
				}else if(auth &&  user.type==="provider")
				{
          			var redir = { redirect: "/login" , message:"provider Login Successfully" , userName:req.user.username , user: user};
				}
                else{
                    var redir = {  message:"Incorrect Username or Wrong Password"};
        	        return res.json(redir);
                }
          		///// redir is the redirect information passed to front end react app.
          		return res.json(redir);
        	});
    


// router.get('/login', async (req, res) => {
//     if (req.isAuthenticated()) {
// 		const user = await User.findOne({
// 			username: req.user.username
// 		})
// 		// console.log("login user", user)
//         var redir = { redirect: "/" , message:'Already Logged In', userName:req.user.username , user: user};
//         return res.json(redir);
//     }
//     else{
//       	var redir = { redirect: "/login", message:'Enter your credentials to Log In' };
//         return res.json(redir);
//     }
// });


// router.get('/logout', function(req, res){
//     req.logOut() ;   // logOut function by Passport
// 	req.session.destroy();
// 	return res.status(200).json({message: 'LOGOUT_SUCCESS'});
//   });




// router.get('/logout', (req, res) => {
	
// })

// router.get('/create', (req, res ) =>{
//     try{
//     var Details = {
//         name: "",
//         email: "",
//         city: "",
//         password: "",
//         countryCode: "",
//         state:"",
//         mobileNumber: "",
//         tasks: {
//             kyc:{
//                 verified: 0,
//             },
//             bankDetails:{
//                 added:0
//             }
//         },
//         emailVerified:false,
//         createdAt:new Date()
//     }
//     const username = req.body.email;
//     const mobilenumber = req.body.mob
//     const countrycode = req.body.ccode

//     // console.log(mobilenumber+" "+username+" "+countrycode)
//     let already_an_user = await db["investorDB"].collection('users').findOne({$or:[{email: username},{countryCode:countrycode,mobileNumber:mobilenumber}]})
    
//     if(already_an_user)
//     {
//         throw new Error('user with this username or mobile number already exists');
//     }

//     if(util.isString(req.body.name)){
//         Details["name"] = req.body.name;
        
//     }
//     else {
//          throw new Error('invalid name field')
//     }
    
//     if(validator.isEmail( req.body.email)) { 
//         Details["email"] = req.body.email;
//     }
//     else{
//         throw new Error('invalid emaill field')
//     }
//     if(util.isString(req.body.city)){
//         Details["city"] = req.body.city;
//     }
//     else{
//         throw new Error('invalid city field')
//     }

//     if(util.isString(req.body.password)){
//         let hash = await bcrypt.hashSync(req.body.password, 10);
//         Details["password"] = hash;
//     }
//     else{
//          throw new Error('invalid password')
//     }
    
//     if(validator.isMobilePhone('+' + req.body.ccode +req.body.mob, 'any', {strictMode : true})){
        
//         Details["countryCode"] = req.body.ccode;
//         Details["mobileNumber"] = req.body.mob;
//     }
//     else{
//           throw new Error('invalid phone field')
//     }
    
//     if(util.isString(req.body.state)){
//         Details["state"] = req.body.state;
//     }
//     else{
//         throw new Error('invalid state field')
//     }
//     await db["investorDB"].collection('users').insertOne(Details);
//     delete Details["password"];
//     req.session.user =Details;
//     res.send({status: true, details : Details});
//     }catch(Error){
//         res.send({error: Error.message});
//     }
// })
module.exports = router