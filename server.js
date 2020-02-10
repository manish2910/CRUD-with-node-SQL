const express = require('express');
const conn = require('./config/db');
const app = express();

app.use(express.json());

conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    let createTodos = `create table if not exists todos(
                            id int primary key auto_increment,
                            title varchar(255) not null,
                            completed tinyint(1) not null default 0
                        )`;
   
    conn.query(createTodos, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      } 
    });
  });

app.use('/api',require('./api/data'));

const PORT = process.env.PRODUCTION || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})