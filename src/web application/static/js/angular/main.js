var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider',
     function($routeProvider,$locationProvider) {
     $locationProvider.html5Mode(true);
     $routeProvider.
             when('/tenant1', {
                 templateUrl: '/static/partials/tenant1.html',
                 controller:"tenant1_controller"
             }).
             when('/tenant2', {
                 templateUrl: '../static/partials/tenant2.html',
                 controller:"tenant2_controller"
             }).when('/tenant3', {
                 templateUrl: '../static/partials/tenant3.html',
                 controller:"tenant3_controller"
             }).when('/tenant4', {
                 templateUrl: '../static/partials/tenant4.html',
                 controller:"tenant4_controller"
             }).otherwise({
                   redirect: '/'
           });
    }]);

app.controller("tenant1_controller",function($scope,$http){
	console.log("Reporting from Tenant 1 controller");
	console.log($scope.comments);
	$scope.showuml=false;
	$scope.showgrade=false;
	    $scope.upload=function(){
	        console.log("Reporting from upload tenant 1");
	        console.log("Folder path---",$scope.path)
	    };

	    $scope.generateUML=function(){
	        console.log("Reporting from generate URL tenant1");
	        $scope.showuml=true;
	        $scope.showgrade=true;
	    };
	    $scope.grade=function(){
	        console.log("Reporting from grade");
	        console.log(document.getElementById("complete").checked);
	        console.log("Points---",$scope.points);
	        console.log("Comments--",$scope.comments);
	    };

	});

app.controller("tenant2_controller",function($scope,$http){
	console.log("Reporting from Tenant 2 controller");
	});
app.controller("tenant3_controller",function($scope,$http){
	console.log("Reporting from Tenant 3 controller");
	});

app.controller("tenant4_controller",function($scope,$http){
	console.log("Reporting from Tenant 4 controller");
	});



