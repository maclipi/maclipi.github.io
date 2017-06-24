angular.module('vamos.services', [])

.factory('LoginService', function ($http, $q) {

    return {
     
      all: function () {
         var response;
          $http.get("data/conent.json").then(function (argument) {
            
          response = argument;


          })
           return response;
      }
  };
})

