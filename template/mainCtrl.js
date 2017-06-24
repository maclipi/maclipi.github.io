angular.module('vamos.controller', [])

.controller('mainCtrl',function ($scope,LoginService,getUserData) {

	$scope.user ={

		userName :'',
		userPassword:''
	}

	$scope.loginFn = function(username,password){

		
		window.localStorage.setItem("validate",1);

		LoginService.all($scope.user.userName,$scope.user.userPassword).then(function(data){

			console.log(data.data.authUser);
			if (data.data.authUser == "Success")
			{
			window.location.href="#!/login";	
			}
			
		});

		getUserData.all($scope.user.userName).then(function(data){

			console.log(data.data);
		})

		

	}
	// body...
})