// /**
//  * Created by Administrator on 2017/7/25.
//  */
// var express = require('express');
// var mysql=require('mysql');
// var router=express.Router();
//
// var pool=mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     password:'123456',
//     database:'schooldata',
//     port:3306
// });
//
// router.get("/",function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     pool.query(`SELECT * from conB_environment`, function(err, rows, fields) {
//         if (err) throw err;
//         res.send(rows)
//     });
// })
//
//
// module.exports=router;
//


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
    pool.query(`SELECT * from conB_environment`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})

// 学校环境文字修改
router.post('/conB_environ',function(req,res){
    var id=req.body["id"];
    var title=req.body["title"];
    var enTitle=req.body["enTitle"];
    var leftA=req.body["leftA"];
    var leftB=req.body["leftB"];
    var leftC=req.body["leftC"];
    var rightA=req.body["rightA"];
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update conb_environment set title='${title}',enTitle='${enTitle}', leftA='${leftA}',leftB="${leftB}",leftC="${leftC}", rightA="${rightA}" where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});
// 学校环境文字修改完


module.exports=router;


