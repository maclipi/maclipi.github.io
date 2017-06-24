angular.module('vamos.services', [])

.factory('LoginService', function ($http, $q) {

    return {
      all: function (username,password) {
          return $http.get('http://188.166.244.126:9000/verifyUser',
           {
           	params: {
          		userId: username,
          		password:password
          	 		}
          	})
      }
  };
})

.factory('getUserData',function ($http,$q) {


	return{
		all: function (username) {

			return $http.get('http://188.166.244.126:9000/getVehicleLocations',{

				params: {
					userId: username
				}
			})

		}
	}
})

