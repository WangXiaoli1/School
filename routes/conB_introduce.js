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
//     pool.query(`SELECT * from conB_introduce`, function(err, rows, fields) {
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
    pool.query(`SELECT * from conB_introduce`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})


// 介绍文字修改
router.post('/conB_introduce1',function(req,res){
    var id=req.body["id"];
    var src=req.body["src"];
    var title=req.body["title"];
    var enTitleA=req.body["enTitleA"];
    var enTitleB=req.body["enTitleB"];
    var conA=req.body["conA"];
    var conB=req.body["conB"];
    var conC=req.body["conC"];
    var btn=req.body["btn"];
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update conb_introduce set title='${title}',enTitleA='${enTitleA}',enTitleB='${enTitleB}', conA='${conA}',conB="${conB}",conC="${conC}", btn="${btn}" where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
});
// 介绍文字修改完

// 介绍文字图片
router.post('/conB_introduceImg',function(req,res){
    res.header("Access-Control-Allow-Origin", "*"); //跨域
    var form = new formidable.IncomingForm();
    form.uploadDir='public/img';
    //上传图片存放的路径
    form.parse(req,function(error,fields,files){
        for(var i in files){
            var file = files[i];  //保存图片属性
            var fName = (new Date()).getTime()  //用一时间戳作为图片的名字
            switch(file.type){    //检测图片的格式
                case "image/jpeg":
                    fName=fName+".jpg";
                    break;
                case "image/png":
                    fName=fName+".png";
                    break;
                case "image/gif":
                    fName=fName+".gif";

            }
            var newPath='public/img/'+fName;  //要返回的图片的路径
            fs.renameSync(file.path,newPath);
            res.send(newPath)
        }
        imgs=`http://192.168.43.5:8005/img/${fName}`
    })
});
router.post('/conB_introduceImgUp',function(req,res){
    var id=req.body['id'];
    console.log(id);
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update conb_picture set src="${imgs}" where id="${id}"`,function(err,rows){
        if(err) throw err;
        res.send('修改成功');
    })
});

// 介绍文字图片完

module.exports=router;


