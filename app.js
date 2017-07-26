var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var get=require('./routes/get');
var get1=require('./routes/get1');


var special=require('./routes/special');
var side_l=require('./routes/side_l');
var side_r=require('./routes/side_r');
var school=require('./routes/school');
var  model=require('./routes/model');
var  conBenvir=require('./routes/conBenvir');
var conB_introduce=require('./routes/conB_introduce');
var edu_class=require('./routes/edu_class');
var edu_myclass=require('./routes/edu_myclass');
var edu_xhrGreen=require('./routes/edu_xhrGreen');
var edu_xhrGreenRight=require('./routes/edu_xhrGreenRight');
var baby_park=require('./routes/baby_park');
var baby_create=require('./routes/baby_create');
var teach_brand=require('./routes/teach_brand');
var teach_leaderOne=require('./routes/teach_leaderOne');
var teach_leaderTwo=require('./routes/teach_leaderTwo');
var teach_leaderThree=require('./routes/teach_leaderThree');






var img=require('./routes/img');
var main_con=require('./routes/post_pic/main_con');
var main_side_l=require('./routes/post_pic/main_side_l');
var main_side_r=require('./routes/post_pic/main_side_r');
var main_school=require('./routes/post_pic/main_school');
var banner=require('./routes/post_pic/banner');
var banner2=require('./routes/post_pic/banner2');
var conB_picture=require('./routes/post_pic/conB_picture');
var intro=require('./routes/post_pic/intro');
var banner3=require('./routes/post_pic/banner3');
var e_myclass=require('./routes/post_pic/e_myclass');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/text',get);
app.use('/main',get1);
app.use('/special',special);
app.use('/side_l',side_l);
app.use('/side_r',side_r);
app.use('/school',school);
app.use('/model',model);
app.use('/conBenvir',conBenvir);
app.use('/conB_introduce',conB_introduce);
app.use('/edu_class',edu_class);
app.use('/edu_myclass',edu_myclass);
app.use('/edu_xhrGreen',edu_xhrGreen);
app.use('/edu_xhrGreenRight',edu_xhrGreenRight);
app.use('/baby_park',baby_park);
app.use('/baby_create',baby_create);
app.use('/teach_brand',teach_brand);
app.use('/teach_leaderOne',teach_leaderOne);
app.use('/teach_leaderTwo',teach_leaderTwo);
app.use('/teach_leaderThree',teach_leaderThree);





app.use('/img',img);
app.use('/main_con',main_con);
app.use('/main_side_l',main_side_l);
app.use('/main_side_r',main_side_r);
app.use('/main_school',main_school);
app.use('/banner',banner);
app.use('/banner2',banner2);
app.use('/conB_picture',conB_picture);
app.use('/intro',intro);
app.use('/banner3',banner3);
app.use('/e_myclass',e_myclass);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//创建端口号为8005
app.listen('8005',function(){
  console.log('sevve start.....')
});
module.exports = app;
