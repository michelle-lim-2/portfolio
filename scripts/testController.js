// test controller


angular.module("myapp", [])
.controller("HelloController", function($scope) {
	$scope.helloTo = {};
	$scope.helloTo.title = "AngularJS";
})