module.exports = {
    checkAuthenticated : function (req, res, next) {                //Check if some user is already authenticated and only then proceed, otherwise redirect to home page
        console.log('check authenticated', req.isAuthenticated(), req.body)
        if(req.isAuthenticated()) {
            return next()
        }

        console.log('check authenticated NO_ACCESS')
        return res.status(200).json({type: 'NO_ACCESS'})
    },checkNotAuthenticated : function (req, res, next) {           //Check if no user is authenticated and only then proceed, otherwise redirect to home page
        console.log('check not authenticated')
        if(req.isAuthenticated()) {
            console.log('check not authenticated req.isAuth')
            return res.status(200).json({type: 'ALREADY_LOGGEDIN'})
        }
        console.log('check not authenticated next')
        next()
    }
}