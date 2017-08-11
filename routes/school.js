/**
 * Created by Administrator on 2017/7/25 0025.
 */

var express = require('express');
var mysql=require('mysql');
var router=express.Router();

var imgs;
var fs=require('fs');   //重新命名
var formidable=require('formidable');   //写入文件

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'schooldata',
    port:3306
});

router.get("/",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from main_school`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
});

//文字修改
router.post('/upSchool',function(req,res){
    var id=req.body["id"];
    var title=req.body["title"];
    var txt=req.body["txt"];
    var con=req.body["con"];
    var intro=req.body["intro"];
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update main_school set title='${title}',txt='${txt}', con='${con}',intro='${intro}' where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});




module.exports=router;


