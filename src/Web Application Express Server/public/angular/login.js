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
	$scope.invalid=true;
	console.log("Reporting from login controller");
	    $scope.login=function(){
	            console.log("Reporting from login function");
	            console.log("username=",$scope.username);
	            console.log("password",$scope.password);
	            $http({
	            	url:"http://localhost:3000/login",
	            	method:"POST",
	            	data:{
	            		"username":$scope.username,
	            		"password":$scope.password
	            	}
	            	
	            }).success(function(data){
	            	console.log("Successful login");
	            	if(data.statusCode==401){
	            		$scope.invalid=false;
	            	}
	            	else
	            	window.location.assign("/");
	            })
	            
	            
	            
	};
	});