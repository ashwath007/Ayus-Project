var mysql = require('mysql');


var connection = module.exports = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'MYAYUS'
});