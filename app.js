try{

const express = require("express");
const app = express();
const mongoose = require("mongoose"); // mongo DB used to save users's account info
const cors = require("cors");
const passport = require("passport"); // passport-local used for user authentication
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const config = require('./config/key')


const dbURI = config.mongoURI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });



app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////cors is used to allow cross-origin request

app.use(
	  	cors({
			    origin: "http://localhost:19006", 
		    	methods: [ "GET", "POST" ],
		    	credentials: true,
		  	})
		); 
		
		app.use(
			session({
				secret: "secretcode",
				resave: true,
				saveUninitialized: true,
			})
			);
			
			app.use(cookieParser("secretcode"));
		
			require('./routes/index')(app);
			
				
			let port = process.env.PORT || 8000
			app.listen(port);
		}
		catch(err)
		{
			console.log(err)
		}