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

// router.get("/",function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     pool.query('insert into main_con (id,txt,txt1)',function (err,rows,fields) {
//          if(err) throw err;
//          res.send(rows)
//      })
//     });







router.get("/",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from main_con`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
});




// router.post('/delMain_con',function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     var id=req.body["id"];
//     console.log(id);
//     pool.query(`DELETE from main_con where id=${id}`,function(err,rows){
//         pool.query(`SELECT * from main_con`,function(err,rows){
//             if(err) throw err;
//             res.send(rows);
//         })
//     });
//
// });


router.post('/upMain_con',function(req,res){
    var id=req.body["id"];
    var val1=req.body["val1"];
    var val2=req.body["val2"];
    console.log(id);
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update main_con set txt='${val1}',txt1='${val2}' where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});


module.exports=router;

