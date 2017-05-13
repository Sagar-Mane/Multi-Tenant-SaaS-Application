
/*
 * GET login page.
 */

exports.login = function(req, res){
  res.render('login', { title: 'login' });
};

exports.signIn=function(req,res){
	console.log("Reporting from signin function");
	
	console.log(req.param("username"));
	console.log(req.param("password"));
	if(req.param("username")=="admin"&&req.param("password")=="admin")
	response={"statusCode":200};
	else
		response={"statusCode":401};
	res.send(response);
};