var vamos = angular.module('vamos', ['vamos.controller','vamos.services','ngRoute']);

vamos.config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.
		when('/when',{

			templateUrl: 'template/main.html',
			controller: 'mainCtrl'
		}).when('/login',{

			templateUrl: 'template/login.html',
			controller:'loginCtrl'
		}).when('/upload',{

			templateUrl:'template/upload.html',
			controller: 'uploadCtrl'

		}).otherwise({

			redirectTo : '/when'
		})
	
}])


