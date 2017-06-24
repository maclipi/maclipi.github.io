angular.module('vamos.controller')

.controller('loginCtrl',function ($scope,$window) {
	// body...
	console.log("login Page");

	$scope.init = function(){

		$scope.valid = window.localStorage.getItem("validate");

		if ($scope.valid == 1)
		{
			
			$scope.pass = 1;
			 $scope.onExit = function() {
			 	
			 	
		 	alert("Sure");
		 	window.localStorage.setItem("validate",0);
		 }

		 $window.onbeforeunload =  $scope.onExit;
		}

		else
		{
			$scope.pass = 0;
		}
	}
})