var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider',
     function($routeProvider,$locationProvider) {
     $locationProvider.html5Mode(true);
     $routeProvider.
             when('/tenant1', {
                 templateUrl: 'templates/tenant1.html',
                 controller:"tenant1_controller"
             }).
             when('/tenant2', {
                 templateUrl: 'templates/tenant2.html',
                 controller:"tenant2_controller"
             }).when('/tenant3', {
                 templateUrl: 'templates/tenant3.html',
                 controller:"tenant3_controller"
             }).when('/tenant4', {
                 templateUrl: 'templates/tenant4.html',
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
        	cb(err);
        });
    }
}]);

app.controller('tenant1_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    $scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;
	$scope.show_generate_uml=false;
	$scope.submission_valid=true;
	$scope.submission_invalid=true;
	
	
	    $scope.generateUML=function(){

        $http({
            method: 'POST',
            url: "http://localhost:90/tenant1/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://localhost:90/tenant1/getUML",
        }).success(function(data){
               
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        if(document.getElementById("complete").checked){
	        	$scope.status="complete";
	        }
	        else
	        	$scope.status="Incomplete"
	        var status=document.getElementById("complete").checked;
	        $http({
	            method: 'POST',
	            url: "/submitGrades",
	            data:{
	            	"tenant_id":1,
	            	"status":$scope.status,
	            	"comments":$scope.comments,
	            	"student_id":$scope.student_id,
	            	"points":$scope.points
	            }
	        }).success(function(data){
	        	console.log("Status-",data.statusCode);
	        	
	        	if(data.statusCode==200){
	        		$scope.submission_valid=false;
		        	$scope.submission_invalid=true;
	        	}
	        	else{
	        		$scope.submission_valid=true;
		        	$scope.submission_invalid=false;
	        	}
	        	
	        	
	        	
	        });
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "http://localhost:90/tenant1/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	$scope.upload_status=true;
        	$scope.status_code = data.Upload_Code_Status;
        	$scope.show_generate_uml=true;
        });
    };
}]);



/*-----------------------------------------Tenant 2 Controller---------------------------------------------------------------------------------*/
app.controller('tenant2_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    $scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;
	$scope.show_generate_uml=false;
	$scope.submission=true;
	$scope.submission_valid=true;
	$scope.submission_invalid=true;
	$scope.submission_valid=true;
	$scope.submission_invalid=true;
	
	    $scope.generateUML=function(){

        $http({
            method: 'POST',
            url: "http://localhost:91/tenant2/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://localhost:91/tenant2/getUML",
        }).success(function(data){
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
                
        })
	   }

	    $scope.grade=function(){
	        
	        if(document.getElementById("complete").checked){
	        	$scope.status="complete";
	        }
	        else
	        	$scope.status="Incomplete"
	        
	        $http({
	            method: 'POST',
	            url: "/submitGrades",
	            data:{
	 	            	"tenant_id":2,
	 	            	"status":$scope.status,
	 	            	"comments":$scope.comments,
	 	            	"student_id":$scope.student_id,
	 	            	"points":$scope.points
	 	            }
	        }).success(function(data){
	        	console.log(data.statusCode);
	        	if(data.statusCode==200){
	        		$scope.submission_valid=false;
	            	$scope.submission_invalid=true;
	        	}
	        	else{
	        		$scope.submission_valid=true;
	            	$scope.submission_invalid=false;
	        	}	
	        });
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "http://localhost:91/tenant2/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	$scope.upload_status=true;
        	$scope.status_code = data.Upload_Code_Status;
        	$scope.show_generate_uml=true;
        });
    };
}]);
/*-------------------------------------------------Tenant 3 Controller------------------------------------------------------------------------*/
    app.controller('tenant3_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    $scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;
	$scope.show_generate_uml=false;
	$scope.submission=true;
	$scope.submission_valid=true;
	$scope.submission_invalid=true;
	
	    $scope.generateUML=function(){
	    	
	    	$http({
            method: 'POST',
            url: "http://localhost:92/tenant3/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://localhost:92/tenant3/getUML",
        }).success(function(data){
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	        
	        if(document.getElementById("complete").checked){
	        	$scope.status="complete";
	        }
	        else
	        	$scope.status="Incomplete"
	        
	        $http({
	            method: 'POST',
	            url: "/submitGrades",
	            data:{
 	            	"tenant_id":3,
 	            	"status":$scope.status,
 	            	"comments":$scope.comments,
 	            	"student_id":$scope.student_id,
 	            	"points":$scope.points
 	            }
	        }).success(function(data){
	        	if(data.statusCode==200){
	        		$scope.submission_valid=false;
	            	$scope.submission_invalid=true;
	        	}
	        	else{
	        		$scope.submission_valid=true;
	            	$scope.submission_invalid=false;
	        	}	
	        });
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "http://localhost:92/tenant3/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	$scope.upload_status=true;
        	$scope.status_code = data.Upload_Code_Status;
        	$scope.show_generate_uml=true;
        });
    };
}]);
/*------------------------------------------------------------------Tenant 4 Controller--------------------------------------------------------*/
    
    
    
app.controller('tenant4_controller', ['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){

    $scope.showuml=false;
	$scope.showgrade=false;
	$scope.upload_status=false;
	$scope.submission=true;
	$scope.submission_valid=true;
	$scope.submission_invalid=true;
	    $scope.generateUML=function(){

        $http({
            method: 'POST',
            url: "http://127.0.0.1:93/tenant4/generateUML",
        }).success(function(data){
            $scope.getUML();
            })
	   };
	   $scope.getUML=function(){

	        $http({
            method: 'GET',
            url: "http://127.0.0.1:93/tenant4/getUML",
        }).success(function(data){
            $scope.image=data.result;
            $scope.showuml=true;
	        $scope.showgrade=true;
        })
	   }

	    $scope.grade=function(){
	    
	    	if(document.getElementById("complete").checked){
	        	$scope.status="complete";
	        }
	        else
	        	$scope.status="Incomplete"
	        
	        $http({
	            method: 'POST',
	            url: "/submitGrades",
	            data:{
 	            	"tenant_id":4,
 	            	"status":$scope.status,
 	            	"comments":$scope.comments,
 	            	"student_id":$scope.student_id,
 	            	"points":$scope.points
 	            }
	        }).success(function(data){
	        	if(data.statusCode==200){
	        		$scope.submission_valid=false;
	            	$scope.submission_invalid=true;
	        	}
	        	else{
	        		$scope.submission_valid=true;
	            	$scope.submission_invalid=false;
	        	}	
	        });
	    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "http://127.0.0.1:93/tenant4/uploadCode";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data) {
        	$scope.upload_status=true;
        	$scope.status_code = data.Upload_Code_Status;
        	$scope.show_generate_uml=true;
        });
    };
}]);

