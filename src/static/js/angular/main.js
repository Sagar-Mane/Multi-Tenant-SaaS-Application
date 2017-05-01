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
             });
    }]);

app.controller("tenant1_controller",function($scope,$http){
	console.log("Reporting from Tenant 1 controller");
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



