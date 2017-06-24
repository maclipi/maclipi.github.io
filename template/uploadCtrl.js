angular.module('vamos.controller')


.controller('uploadCtrl', function ($scope,$http) {


	$scope.upload = function (heading,content) {

		var dataobj = {heading : heading, pagecontent : content}

		$http.post("data/conent.json", dataobj).then(function(response){

			console.log(response);
		});
		// body...
	}
	// body...
})