var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var imgs
var fs=require('fs');   //重新命名
var formidable=require('formidable');   //写入文件
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'schooldata',
    port:3306
});
//插入图片
router.post('/banner',function(req,res){
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
        pool.query(`insert into banner(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
            if (err) throw err;
            if(rows){
                res.send('上传成功')
            }
        });



    })
});

router.get('/banner',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from banner`,function(err,rows){
        if(err) throw err;
        res.send(rows);
    })
});


router.post('/delBanner',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var id=req.body["id"]
    console.log(id)
    pool.query(`DELETE from banner where id=${id}`,function(err,rows){
        pool.query(`SELECT * from banner`,function(err,rows){
            if(err) throw err;
            res.send(rows);
        })
    });

});


router.post('/banimg',function(req,res){
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



router.post('/upBanner',function(req,res){
    var id=req.body["id"];
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`update banner set  src="${imgs}" where id=${id}`, function(err, rows, fields) {
        if (err) throw err;
        res.send("修改成功")
    });
})


module.exports=router;