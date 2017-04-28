var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider',
     function($routeProvider) {
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
             }).
             otherwise({
                 redirectTo: '/'
             });
    }]);

app.controller("tenant1_controller",function($scope,$http){
	console.log("Reporting from tenant1 controller");
	});

app.controller("tenant2_controller",function($scope,$http){
	console.log("Reporting from tenant2 controller");
	});
app.controller("tenant3_controller",function($scope,$http){
    console.log("Reporting from tenant 3 controller");
});
app.controller("tenant4_controller",function($scope,$http){
    console.log("Reporting from tenant 4 controller");
});


