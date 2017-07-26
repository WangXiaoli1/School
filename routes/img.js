/**
 * Created by Administrator on 2017/7/24 0024.
 */
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
})

router.post('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*"); //跨域
    var form = new formidable.IncomingForm();
    form.uploadDir='public/img';
    //上传图片存放的路径

    form.parse(req,function(error,fields,files){
        for(var i in files){
            var file = files[i];  //保存图片属性
            var fName = (new Date()).getTime()  //用一时间戳作为图片的名字
            switch(file.type){    //检测图片的格式
                case "img/jpg":
                    fName=fName+".jpg";
                    break;
                case "img/png":
                    fName=fName+".png";
                    break;
                case "img/gif":
                    fName=fName+".gif";

            }
            var newPath='public/img/'+fName;  //要返回的图片的路径
            fs.renameSync(file.path,newPath);
            // res.send(fName)
        }
    //     pool.query(`insert into main_con(src) values('http://192.168.43.5:8005/img/${fName}')`, function (err, rows) {
    //             if (err) throw err;
    //             if (rows) {
    //                 res.send('上传成功')
    //             }
    //         });
    //
    //
    //   pool.query(`insert into main_side_l(src1) values('http://192.168.43.5:8005/img/${fName}')`, function (err, rows) {
    //     if (err) throw err;
    //     if (rows) {
    //         res.send('上传成功')
    //     }
    // });
    //
    //
    // pool.query(`insert into main_side_r(src1) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
    //         if (err) throw err;
    //         if(rows){
    //             res.send('上传成功')
    //         }
    //     });
    //
    //     pool.query(`insert into main_side_r(src1) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
    //         if (err) throw err;
    //         if(rows){
    //             res.send('上传成功')
    //         }
    //     });
    //
    //     pool.query(`insert into main_school(src1) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
    //         if (err) throw err;
    //         if(rows){
    //             res.send('上传成功')
    //         }
    //     });

        // pool.query(`insert into banner(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
        //     if (err) throw err;
        //     if(rows){
        //         res.send('上传成功')
        //     }
        // });
        // pool.query(`insert into banner2(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
        //     if (err) throw err;
        //     if(rows){
        //         res.send('上传成功')
        //     }
        // });
        // pool.query(`insert into conB_picture(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
        //     if (err) throw err;
        //     if(rows){
        //         res.send('上传成功')
        //     }
        // });

        // pool.query(`insert into conb_introduce(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
        //     if (err) throw err;
        //     if(rows){
        //         res.send('上传成功')
        //     }
        // });
        // pool.query(`insert into banner3(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
        //     if (err) throw err;
        //     if(rows){
        //         res.send('上传成功')
        //     }
        // });


        pool.query(`insert into edu_myclass(src) values('http://192.168.43.5:8005/img/${fName}')`,function(err,rows){
            if (err) throw err;
            if(rows){
                res.send('上传成功')
            }
        });
})
    });

module.exports=router;