exports.grade=function(req,res){
	console.log("Reporting from grading function");
	var comments=req.param("id");
	console.log("Comments",comments);
	var response={"status":"success"};
	res.send(response);
};