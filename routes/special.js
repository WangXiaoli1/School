/**
 * Created by Administrator on 2017/7/24 0024.
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
    pool.query(`SELECT * from main_special`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
});


// router.post('/delSpecial',function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     var id=req.body["id"];
//     console.log(id);
//     pool.query(`DELETE from main_special set  where id=${id}`,function(err,rows){
//         pool.query(`SELECT * from banner`,function(err,rows){
//             if(err) throw err;
//             res.send(rows);
//         })
//     });
//
// });


router.post('/upMain_special',function(req,res){
    var id=req.body["id"];
    var course=req.body["course"];
    var txt=req.body["txt"];
    var con=req.body["con"];
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update main_special set course='${course}',txt='${txt}', con='${con}' where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});



module.exports=router;

