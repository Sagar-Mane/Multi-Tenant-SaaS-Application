var ejs = require('ejs');
var mysql = require('mysql');

// Put your mysql configuration settings - user, password, database and port
function getConnection() {
    var connection = mysql.createConnection({
        host : 'uml-parser.chrsmscior6m.us-east-1.rds.amazonaws.com',
        user : 'admin',
        password : 'admin123',
        database : 'StudentGrade',
        port : 3306
    });
    return connection;
}

function fetchData(callback, sqlQuery) {

    console.log("\nMy SQL Query:" + sqlQuery);

    var connection = getConnection();



    connection.query(sqlQuery, function(err, rows, fields) {
        if (err) {
            console.log("ERROR: " + err.message);
            connection.end();
        } else { // return err or result
            console.log("DB Results:" + rows);
            connection.end();
            callback(err, rows);
        }
    });
    console.log("\nConnection closed...");

}

exports.fetchData = fetchData;