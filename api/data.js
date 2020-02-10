const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/list',(req,res)=>{
    conn.query(`SELECT * FROM todos`,(err,results,fields)=>{
        console.log(results,fields);
    });
    res.send("GET all data")
});

router.get('/postlist',(req,res)=>{
    conn.query("INSERT INTO todos (title,completed) VALUES ('You have learned how to inser data in mysql',true)",(err,results,fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    res.send("POST data");
});

router.get('/updatelist/:id',(req,res)=>{
    conn.query(`UPDATE todos SET title = 'I am updated one' , completed = "1" WHERE id=${req.params.id} `,(err,results,fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    res.send("Update data");
});

router.get('/deletelist/:id',(req,res)=>{
    conn.query(`DELETE FROM todos WHERE id=${req.params.id}`,(err,results,fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    res.send("Delete all data");
});

module.exports = router;