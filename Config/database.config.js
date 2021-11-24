const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

//Connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected')
})

module.exports = connection;