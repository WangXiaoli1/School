var express=require('express');
var mysql=require('mysql');
var router=express.Router();


var fs=require('fs');   //重新命名
var formidable=require('formidable');   //写入文件

var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'schooldata',
    port:3306
});
//调取图片

router.get('/banner2',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from banner2`,function(err,rows){
        if(err) throw err;
        res.send(rows);
    })
});



var imgs;
router.post('/ban2img',function(req,res){
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

router.post('/upban2',function(req,res){
    var id=req.body['id']
    console.log(id)
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update banner2 set src="${imgs}" where id=${id}`,function(err,rows){
        if(err) throw err;
        res.send('修改成功');
    })
});

module.exports=router;
