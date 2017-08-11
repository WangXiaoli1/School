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
    pool.query(`SELECT * from baby_create`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})

// 介绍文字修改
router.post('/baby_createTxt',function(req,res){
    var id=req.body["id"];
    var txt=req.body["txt"];

    res.header("Access-Control-Allow-Origin", "*");

    pool.query(`update baby_create set txt='${txt}' where id='${id}'`, function(err, rows, fields) {

        if (err) throw err;
        res.send("修改成功")
    });
});
// 介绍文字修改完


module.exports=router;


