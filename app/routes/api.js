var User = require('../models/user');
	
module.exports = function(router){
	//this is our route - moved from server.js to here
	//http://localhost:8000/api/users
	router.post('/users', function(req,res){
		// res.send('just testing route');
		var user = new User();
		console.log(req.body);
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		if(req.body.username == null || req.body.password == null || req.body.email == null){
			// res.send('ensure all fields are filled')
			res.json({success: false, msg: 'ensure all fields are filled'} );
		} else{
			user.save(function(err){
				if(err){
					// res.send('username or password already taken!')
					res.json({success: false, msg: 'username or password already taken!'} );
				} else {
					// res.send('user created');
					res.json({success: true, msg: 'user created'} );
				}
			}); //saves to database
		}
		
	}) 
	//we use post when entering to database
	// get to retreive data from database
	//put is update data
	//delete is delete data
	//to test clients postman, arc(advancesriskclient)

	router.get('/', function(req,res){
		res.send('now reouter from app ');
	}) 




	return router;
}