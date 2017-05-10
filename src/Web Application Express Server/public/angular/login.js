var app = angular.module('login', ['ngRoute']);
app.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/login', {
                 templateUrl: '/templates/login.html',
                 controller:"login_controller"
             })
    }]);

app.controller("login_controller",function($scope,$http){
	console.log("Reporting from login controller");
	    $scope.login=function(){
	            console.log("Reporting from login function");
	            window.location.assign("/");
	};
	});