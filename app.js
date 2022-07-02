// const express = require("express");
// const app = express(); 
// var cors = require("cors");
// const bodyParser = require("body-parser");
// const flash = require("express-flash");
// const passport = require("passport"); // passport-local used for user authentication
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// // const res = require('dotenv').config/()
// // console.log(res)

// // const server = require('http').Server(app)
// // socket io is required for successful connection between peers

// const mongoose = require("mongoose"); // mongo DB used to save users's account info

// const dbURI = "mongodb+srv://amanverma:Abcd!1234@cluster0.pqzhp.mongodb.net/test"
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         console.log("Mongoose Is Connected")
//     })
// .catch(err => console.log(err));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(flash());

// app.use(
//     cors({
//       origin: "http://localhost:3000", 
//       methods: [ "GET", "POST" ],
//       credentials: true,
//     })
// );

// app.use(
//     session({
//       	secret: "secretcode",
//       	resave: true,
//       	saveUninitialized: true,
//     })
// );

// app.use(cookieParser("secretcode"));

// ////Initializing local-passport for user authentication
// app.use(passport.initialize());
// app.use(passport.session());
// require("./config/passport-config")(passport);

// const loginRoute = require('./routes/login')                        //Login route
// app.use(loginRoute)

// const createStudent = require('./routes/createStudent')                        //Login route
// app.use(createStudent)

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, function () {
//     console.log("Listening on port " + PORT);
//   });
  

try{

	// const res = require('dotenv').config()
	// console.log(res)
	
	const express = require("express");
	const app = express();
	// const twilio = require('twilio'); 
	//twilio requirements -- Texting API 
	// const accountSid = 'AC9ad0084bd398862b8f5348c7787d440e';
	// const authToken = 'ee2954277e1e6eb64816ec2edd4203fa'; 
	// const client = new twilio(accountSid, authToken);
	// const server = require('http').Server(app)
	// socket io is required for successful connection between peers
	// const io = require('socket.io')(server)
	
// const mongoose = require("mongoose"); // mongo DB used to save users's account info
// const cors = require("cors");
// const passport = require("passport"); // passport-local used for user authentication
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const bodyParser = require("body-parser");
// const flash = require("express-flash");
// const config = require('./config/key')


// const dbURI = config.mongoURI
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(result => {
// 	console.log("Mongoose Is Connected");
// })
// .catch(err => console.log(err));


// app.use(flash());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

////cors is used to allow cross-origin request

// app.use(
	//   	cors({
		// 	    origin: "http://localhost:3000", 
		//     	methods: [ "GET", "POST" ],
		//     	credentials: true,
		//   	})
		// );
		
		// app.use(
		// 	session({
		// 		secret: "secretcode",
		// 		resave: true,
		// 		saveUninitialized: true,
		// 	})
		// 	);
			
		// 	// app.use(cookieParser("secretcode"));
			
		// 	////Initializing local-passport for user authentication
		// 	app.use(passport.initialize());
		// 	app.use(passport.session());
		// 	require("./middleware/passport-config")(passport);
			
			
			

			
			// const loginRoute = require('./routes/login')                        //Login route
			// app.use(loginRoute)
			
			// const createStudent = require('./routes/createUser')                        //Login route
			// app.use(createStudent)
			
			// const test = require('./routes/test')                        //Login route
			// app.use(test)
			
			app.get('/',(req,res)=>{
				
				res.send('hi buddy')
			})
			let port = process.env.PORT || 8000
			app.listen(port);
		}
		catch(err)
		{
			console.log(err)
		}
			// const campusTiming = require('./routes/campusTiming')                        //Login route
			// app.use(campusTiming)
			
			// const hostelTiming = require('./routes/hostelTiming')                        //Login route
			// app.use(hostelTiming)
			
// const vacationTiming = require('./routes/vacationTiming')                        //Login route
// app.use(vacationTiming)

// const getRecord = require('./routes/getRecord')                        //Login route
// app.use(getRecord)

// const sendText = require('./routes/sendMessage')                        //Login route
// app.use(sendText)