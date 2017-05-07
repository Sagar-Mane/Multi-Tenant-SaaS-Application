var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider',
     function($routeProvider,$locationProvider) {
     $locationProvider.html5Mode(true);
     $routeProvider.
             when('/tenant1', {
                 templateUrl: 'public/templates/tenant1.html',
                 controller:"tenant1_controller"
             }).
             when('/tenant2', {
                 templateUrl: 'public/templates/tenant2.html',
                 controller:"tenant2_controller"
             }).when('/tenant3', {
                 templateUrl: 'public/templates/tenant3.html',
                 controller:"tenant3_controller"
             }).when('/tenant4', {
                 templateUrl: 'public/templates/tenant4.html',
                 controller:"tenant4_controller"
             }).otherwise({
                   redirect: '/'
           });
    }]);

//File Upload Directive
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

//File Upload Service
app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, cb) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
        	cb(data);
        })
        .error(function(err){
        	console.log(err);
        	cb(err);
        });
    }
}]);

app.controller('tenant1_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    console.log("Reporting from Tenant 1 controller");
	$scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;

	    $scope.generateUML=function(){

        console.log("Reporting from generateUML POST Angular");
        $http({
            method: 'POST',
            url: "http://35.164.133.164:90/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://35.164.133.164:90/getUML",
        }).success(function(data){
                console.log(data.result);
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        console.log("Reporting from grade POST Angular");
	        console.log(document.getElementById("complete").checked);
	        console.log("Points---",$scope.points);
	        console.log("Comments--",$scope.comments);
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log("Reporting fro uploadFile POST Angular");
        var uploadUrl = "http://35.164.133.164:90/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	console.log(data.Upload_Code_Status);
        	$scope.upload_status=true;
        	$scope.status_code = data.status;
        });
    };
}]);



/*-----------------------------------------Tenant 2 Controller---------------------------------------------------------------------------------*/
app.controller('tenant2_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    console.log("Reporting from Tenant 2 controller");
	$scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;

	    $scope.generateUML=function(){

        console.log("Reporting from generateUML POST Angular");
        $http({
            method: 'POST',
            url: "http://127.0.0.1:80/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://127.0.0.1:80/getUML",
        }).success(function(data){
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        console.log("Reporting from grade POST Angular");
	        console.log("Points---",$scope.points);
	        console.log("Comments--",$scope.comments);
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log("Reporting fro uploadFile POST Angular");
        var uploadUrl = "http://127.0.0.1:80/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	console.log(data.Upload_Code_Status);
        	$scope.upload_status=true;
        	$scope.status_code = data.status;
        });
    };
}]);
/*-------------------------------------------------Tenant 3 Controller------------------------------------------------------------------------*/
    app.controller('tenant3_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    console.log("Reporting from Tenant 3 controller");
	$scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;

	    $scope.generateUML=function(){

        console.log("Reporting from generateUML POST Angular");
        $http({
            method: 'POST',
            url: "http://127.0.0.1:70/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://127.0.0.1:70/getUML",
        }).success(function(data){
                console.log(data);
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        console.log("Reporting from grade POST Angular");
	        console.log(document.getElementById("complete").checked);
	        console.log("Points---",$scope.points);
	        console.log("Comments--",$scope.comments);
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log("Reporting fro uploadFile POST Angular");
        var uploadUrl = "http://127.0.0.1:70/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	console.log(data.Upload_Code_Status);
        	$scope.upload_status=true;
        	$scope.status_code = data.status;
        });
    };
}]);
/*------------------------------------------------------------------Tenant 4 Controller--------------------------------------------------------*/
    
    
    
    app.controller('tenant4_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    console.log("Reporting from Tenant 4 controller");
	$scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;

	    $scope.generateUML=function(){

        console.log("Reporting from generateUML POST Angular");
        $http({
            method: 'POST',
            url: "http://127.0.0.1:5000/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://127.0.0.1:5000/getUML",
        }).success(function(data){
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        console.log("Reporting from grade POST Angular");
	        console.log(document.getElementById("complete").checked);
	        console.log("Points---",$scope.points);
	        console.log("Comments--",$scope.comments);
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log("Reporting fro uploadFile POST Angular");
        var uploadUrl = "http://127.0.0.1:5000/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	console.log(data.Upload_Code_Status);
        	$scope.upload_status=true;
        	$scope.status_code = data.status;
        });
    };
}]);

