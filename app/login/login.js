angular.module("myApp").
controller("loginController",['$scope','news','$http',function($scope,news,$http){
	$scope.patientdata = [];
	$http.get("http://localhost:8080/J/patientFeed").success(function(resp){
		
		$scope.patientdata = resp;
	})
	$scope.newsFeed= news.myFunc("--Feed--");
}]);