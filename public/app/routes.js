var appRoutes = angular.module('appRoutes',['ngRoute']);

appRoutes.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/' ,{
		templateUrl: 'app/views/pages/home.html',
		// controller: 'docController'
	})
	.when('/about' ,{
		templateUrl: 'app/views/pages/about.html',
		// controller: 'docController'
	})
	.when('/create' ,{
		templateUrl: 'app/views/pages/create.html',
		// controller: 'docController'
	})
	.when('/register' ,{
		templateUrl: 'app/views/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'reg' // like a nickname
	})
	.otherwise({redirectTo: '/'});
	// console.log('testing routes yo');
});