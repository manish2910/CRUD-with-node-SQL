const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

// config for your database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });

//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

const PORT = process.env.PRODUCTION || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})