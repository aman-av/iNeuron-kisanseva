const router = require('express').Router()
const passport = require('passport')
const flash = require('express-flash')
const User = require('../models/usermodel')
const bcrypt = require('bcryptjs')
const { checkAuthenticated, checkNotAuthenticated } = require('../middleware/auth')
router.use(flash())

router.get('/details',async (req,res,next)=>{
    res.send("HIi")
})
// router.post("/createUser", async (req, res, next) => { // req is request, res is response

//         const username=req.body.username
//         const password=req.body.password
//         const type = req.body.type
//         const user = await User.findOne({
//             username: username
//         })       
//         if(user && (user.username!=undefined)) {
//             var redir = { redirect: "/" , message:"student already exists" , userName:user.username };	
// 			return res.json(redir);
//         }else{
//             let hashedPassword = await bcrypt.hashSync(req.body.password, 10);
//             // const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         	const newUser = new User({
//           		username: req.body.username,
//           		password: hashedPassword,
//                 type:type
                
//         	});
//         	await newUser.save();
//         	var redir = { redirect: "/", message:"New student Created", user: newUser};
//         	return res.json(redir);
//         } 	
// });



module.exports = router