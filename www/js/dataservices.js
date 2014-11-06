angular.module('starter.dataservices', [])

.factory('dataService', function($scope, $http) {
	var data = [];

	return {
		getData: function(){
			return $http.get("https://www.yoursite.com/excercises").then(function(response){
				data = response;
				return data;
			}, function(err) {
			    console.error('ERR', err);
			    // err.status will contain the status code
	  		});
		},
		postData: function(){
			$scope.master = {};

			$scope.input = function(input) {
				$scope.master = angular.copy(input);
				console.log($scope.master);

				$http.post("server/insert.php",{'post': $scope.master.text})
				.success(function(data, status, headers, config){
				    console.log("inserted Successfully");
				    console.log(data);
				});
			};
		}
	}
})

.factory('localStorage', ['$window', function($window) {
	return {
		set: function(key, value) {
		  $window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
		  return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
		  $window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
		  return JSON.parse($window.localStorage[key] || '{}');
		}
	}
}]);

;