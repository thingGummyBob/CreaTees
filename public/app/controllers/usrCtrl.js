angular.module('userCont',[])

// .config( function(){
// 	console.log('testinggg module')
// });

.controller('regCtrl', function($http, $location, $timeout){
	var me = this;
	me.regUser = function(regData){
		me.eMsg = false;
		console.log('submitted');
		// console.log(this.regData);
		$http.post('/api/users', this.regData)
		.then(function(data){
			// console.log(data)
			console.log(data.data.success);
			console.log(data.data.msg);
			if(data.data.success){ // msg + send to browser
				me.sMsg = data.data.msg;
				$timeout(function() {
					$location.path('/');
				}, 2000);
				
			}
			else{
				me.eMsg = data.data.msg
			}
		})
		//http rquest of the post type which sends to api.js

	};
})