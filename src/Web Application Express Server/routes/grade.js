var express = require('express');
var router = express.Router();
var mysql = require('./DB_Connection');


var submitGrades = function (req, res) {
    console.log("submitGrades");
    var tenant_id=req.param("tenant_id");
    var comments=req.param("comments");
    var student_id=req.param("student_id");
    
    console.log("Reporting inputs",tenant_id+"  "+ comments+"  "+ student_id);

    var TenantInsertQuery = "INSERT INTO tenant_shared_data ( tenant_id, comments, student_id) VALUES ('" +
        tenant_id +
        "','" + comments +
        "','" + student_id +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("something went wrong!");
                var json_responses = {
                    "statusCode" : 401
                };
                res.send(json_responses);

            } else {

                console.log("tenant details inserted!");
                json_responses = {
                    "statusCode" : 200
                };


                switch (tenant_id)
                {
                    case 1:
                    	console.log("Tenant 1 *******************************");
                        var TenantInsertQuery1 = "INSERT INTO tenant_specific_data( student_id, grade_key, grade_value) VALUES (" +
                            "'"+req.param("student_id")+
                            
                            "','Status'" +
                            ",'" + req.param("status") +"'), ("+
                            "'"+req.param("student_id") +
                            
                            "','Points'" +
                            ","+req.param("points")+")";
                        mysql.fetchData(function(err, results) {

                            if (err) {
                                throw err;
                            } else {
                                if (results.length > 0) {

                                    console.log("something went wrong!");
                                    var json_responses = {
                                        "statusCode" : 401
                                    };
                                    res.send(json_responses);

                                } else {

                                    console.log("tenant details inserted!");
                                    json_responses = {
                                        "statusCode" : 200
                                    };
                                    res.send(json_responses);
                                }
                            }
                        }, TenantInsertQuery1);
                        break;
                    case 2:
                    	console.log("Tenant 2 *******************************");
                    	var TenantInsertQuery1 = "INSERT INTO tenant_specific_data( student_id, grade_key, grade_value) VALUES (" +
                        "'"+req.param("student_id")+
                        
                        "','Status'" +
                        ",'" + req.param("status") +"'), ("+
                        "'"+req.param("student_id") +
                        
                        "','Marks'" +
                        ","+req.param("points")+")";
                        mysql.fetchData(function(err, results) {

                            if (err) {
                                throw err;
                            } else {
                                if (results.length > 0) {

                                    console.log("something went wrong!");
                                    var json_responses = {
                                        "statusCode" : 200
                                    };
                                    res.send(json_responses);

                                } else {

                                    console.log("tenant details inserted!");
                                    json_responses = {
                                        "statusCode" : 401
                                    };
                                    res.send(json_responses);
                                }
                            }
                        }, TenantInsertQuery1);
                        break;
                    case 3:
                    	console.log("Tenant 3 *******************************");
                    	var TenantInsertQuery1 = "INSERT INTO tenant_specific_data( student_id, grade_key, grade_value) VALUES (" +
                        "'"+req.param("student_id")+
                        
                        "','Status'" +
                        ",'" + req.param("status") +"'), ("+
                        "'"+req.param("student_id") +
                        
                        "','Grade'" +
                        ",'"+req.param("points")+"')";
                        mysql.fetchData(function(err, results) {

                            if (err) {
                                throw err;
                            } else {
                                if (results.length > 0) {

                                    console.log("something went wrong!");
                                    var json_responses = {
                                        "statusCode" : 200
                                    };
                                    res.send(json_responses);

                                } else {

                                    console.log("tenant details inserted!");
                                    json_responses = {
                                        "statusCode" : 401
                                    };
                                    res.send(json_responses);
                                }
                            }
                        }, TenantInsertQuery1);
                        break;
                    case 4:
                    	console.log("Tenant 4 *******************************");
                    	var TenantInsertQuery1 = "INSERT INTO tenant_specific_data( student_id, grade_key, grade_value) VALUES (" +
                        "'"+req.param("student_id")+
                        
                        "','Status'" +
                        ",'" + req.param("status") +"'), ("+
                        "'"+req.param("student_id") +
                        
                        "','Pointer'" +
                        ","+req.param("points")+")";
                        mysql.fetchData(function(err, results) {

                            if (err) {
                                throw err;
                            } else {
                                if (results.length > 0) {

                                    console.log("something went wrong!");
                                    var json_responses = {
                                        "statusCode" : 200
                                    };
                                    res.send(json_responses);

                                } else {

                                    console.log("tenant details inserted!");
                                    json_responses = {
                                        "statusCode" : 401
                                    };
                                    res.send(json_responses);
                                }
                            }
                        }, TenantInsertQuery1);
                        break;
                }
                res.send(json_responses);
            }
        }
    }, TenantInsertQuery);
};

module.exports = {
    submitGrades
};