const express = require('express');
const app = express();
var mysql = require('mysql');

const chalk = require('chalk');

const port = process.env.PORT || 8000;

// Data Base Setup
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'MYAYUS'
});




app.get("/", (req, res) => {
    res.send("Good");
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });

});

app.listen(port, () => {
    console.log(chalk.green(`Server started at ${port}`));
});