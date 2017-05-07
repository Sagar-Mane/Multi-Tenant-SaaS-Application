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
    console.log($scope.username);
    console.log($scope.password);
    
	    $scope.login=function(){
            
            $http({
                method:"POST",
                url:"http://127.0.0.1:90/login",
                data:{
                    "username":$scope.username,
                    "password":$scope.password
                }   
            }).success(function(data){
                console.log("Reporting from successful login");
                if(data.status=="LoginSuccess")
                    window.location.assign("/");
                else
                    console.log("Login Failed")
	            
            })
	            
	};
	});