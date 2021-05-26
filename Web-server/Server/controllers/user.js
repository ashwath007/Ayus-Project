const connection = require("../db/bdhelper");

exports.userControl = () => {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });
}