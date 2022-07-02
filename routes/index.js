module.exports=(app)=>{
            const loginRoute = require('./login')                        //Login route
			app.use(loginRoute)
			
			const createStudent = require('./createUser')                        //Login route
			app.use(createStudent)
			
			const productpost = require('./productpost')                        //Login route
			app.use(productpost)

            const allproduct = require('./allproduct')                        //Login route
			app.use(allproduct)

			const test = require('./test')                        //Login route
			app.use(test)

			const labourRoute = require('./labour')                        //Login route
			app.use(labourRoute)

            app.get('/',(req,res)=>{
				
				res.send('hi buddy')
			})
}