/**
 * Created by Administrator on 2017/7/25.
 */
var express = require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'schooldata',
    port:3306
});

router.get("/",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from edu_class`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
});

router.post('/upClass',function(req,res){
    var id=req.body["id"];
    var text=req.body["text"];
    console.log(id);
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update edu_class set text='${text}' where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});


module.exports=router;

