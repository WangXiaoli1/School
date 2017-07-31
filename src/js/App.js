import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';



import '../css/App.css';
import '../css/Main.css';
import '../css/ConB.css';
import '../css/Education.css';
import '../css/Baby.css';
import '../css/Teach.css';
import '../css/Forward.css';
import 'antd/dist/antd.css';
// 移动端
import '../css/App.css';
import '../css/HeaderP.css';
import '../css/HomeP.css';






import Main from './Main';
import ConB from './ConB';
import Education from './Education';
import Baby from './Baby';
import Teach from './Teach';
import Forward from './Forward';
// 移动端
import HeaderP from './HeaderP';
import HomeP from './HomeP';
import rem from './rem'





class App extends Component {
    constructor () {
        super();
        this.state = {
            nav:[],
            "tel":{"tel":"020-00000000"},
            "foot":{
                "con":" 儿童教育，其实不只是大人如何教育孩子，也是孩子如何教育大人，让大人成为更加完善的人，更加领悟生活真谛的人。",
                "img":"img/icon.png",
                "bg":"img/footer-bg.jpg"
            },
            "contact":[
                {"link":"联系QQ：258506508"},
                {"link":"手机号码：130000000"},
                {"link":"联系邮箱：CONTACT@FKADJKHSF.CO"},
                {"link":"联系地址：XXX省XXX市XXX县XXX路XXX号"}
            ],
            "bottom":{
                "copy":"©2016 网站模板-学校 版权所有",
                "phone":"手机版"
            }

        };
    }
    bodyScroll(e){

        // var ev=e||window.event;
        // var tops=document.body.scrollTop;
        // console.log(tops);

        if(window.location.href=="http://localhost:3000/"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }
            //Main 动画
console.log(1)

            $(document).ready(function(e) {
                $(window).scroll(function(){
                    // 圆盘动画
                        gdjz(".con",'moveConLi',0);
                    // 圆盘动画完

                    // 圆盘上的字动画
                    gdjz(".txt",'moveConLiTxt',0);
                    // 圆盘上的字动画完

                    //小女孩背景动画
                    gdjz(".special",'moveSpecial',100);
                    //小女孩背景动画完

                    //小女孩字动画
                    gdjz(".course",'moveCourse',100);
                    //小女孩字动画完

                    //小女孩按钮动画
                    gdjz(".btn",'moveCourseBtn',-200);
                    //小女孩按钮动画完

                    //彩绘课程动画
                    gdjz(".one",'moveOne',-50);
                    //彩绘课程动画完

                    //彩绘课程文字动画
                    gdjz(".oneTxt",'moveOneTxt',-50);
                    //彩绘课程文字动画完

                    //彩绘课程下动画
                    gdjz(".two",'moveOne',-250);
                    //彩绘课程下动画完


                    //品德教育1动画
                    gdjz(".side_r_one",'moveEduOne',-50);
                    //品德教育1动画完

                    //品德教育2动画
                    gdjz(".side_r_two",'moveEduTwo',-250);
                    //品德教育2动画完

                    //xhr动画
                    gdjz(".side_r_three",'moveEduThree',-300);
                    //xhr动画完

                    //品德教育动画
                    gdjz(".edu",'moveEdu',-300);
                    //品德教育动画完

                    //品德教育文字动画
                    gdjz(".eduTxt",'moveEduTxt',-300);
                    //品德教育文字动画完

                    //学校环境动画
                    gdjz(".school",'moveSchool',-50);
                    //学校环境动画完

                    //xhr2动画
                    gdjz(".xhrtwo",'moveXhrTwo',-150);
                    //xhr2动画完

                    //Main 动画完


                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完

                    }
                );
            });

        }else if(window.location.href=="http://localhost:3000/ConB"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }
            console.log(2)
            $(document).ready(function() {
                $(window).scroll(function(){
                    // 学校环境动画
                        gdjz(".environment",'moveEnvironment',100);
                    // 学校环境动画完

                    //照片墙动画
                    gdjz("#picture div:nth-of-type(1)",'movePicture',-80);
                    //             gdjz("#picture div:nth-of-type(2)",'movePictureB',-80);
                    gdjz("#picture div:nth-of-type(3)",'movePicture',-80);
                    //             gdjz("#picture div:nth-of-type(4)",'movePictureB',-80);
                    // 照片墙动画完

                    // 教育介绍
                    gdjz(".introduce",'moveIntroduce',-20);
                    gdjz(".introduceA",'moveIntroduce',-20);
                    gdjz(".introduceB",'moveIntroduce',-20);
                    gdjz(".introduceC",'moveIntroduce',-20);
                    gdjz(".introduceD",'moveIntroduce',-20);
                    gdjz(".introduceE",'moveIntroduce',-20);
                    gdjz(".introduceF",'moveIntroduce',-20);
                    gdjz(".introduceG",'moveIntroduce',-20);
                    gdjz(".introduceH",'moveIntroduce',-20);
                    gdjz(".introduceI",'moveIntroduce',-20);

                    // 教育介绍完

                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                    }
                );
            });

        }else if(window.location.href=="http://localhost:3000/Education"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }
            console.log(3)
            $(document).ready(function() {
                $(window).scroll(function(){
                    // class 动画
                        gdjz(".class>p:nth-of-type(1)",'Edu_moveClass',-100);
                    gdjz(".class>p:nth-of-type(2)",'Edu_moveClass',-100);
                    gdjz(".class>p:nth-of-type(3)",'Edu_moveClass',-100);
                    gdjz(".class>p:nth-of-type(4)",'Edu_moveClass',-100);
                    // class动画完

                    // myclass动画
                    gdjz(".myClassA",'Edu_myClassBg',-100);
                    gdjz(".myClassCon",'Edu_myClassTxt',-100);
                    gdjz(".myClassB",'Edu_myClassImg',-100);
                    // myclass动画完

                    // 绿色小黄人动画
                    gdjz(".xhr",'Edu_moveXhr',-50);
                    gdjz(".xhrGreen-right",'Edu_xhrGreenRight',-50);
                    // 绿色小黄人动画完

                    // 图片动画
                    gdjz(".pictureC-left div:nth-of-type(1)",'Edu_pictureCLeft',-50);
                    gdjz(".pictureC-left div:nth-of-type(2)",'Edu_pictureCLeftA',-50);
                    gdjz(".pictureC-left div:nth-of-type(3)",'Edu_pictureCLeft',-50);
                    gdjz(".pictureC-left div:nth-of-type(4)",'Edu_pictureCLeftA',-50);
                    gdjz(".pictureC-right",'Edu_pictureCRight',-50);
                    // 图片动画完

                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                    }
                );
            });

        }else if(window.location.href=="http://localhost:3000/Baby"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }
            console.log(4)
            $(document).ready(function() {
                $(window).scroll(function(){
                    // baby动画
                        gdjz(".model",'baby_move',0);
                    // baby动画完

                    // park动画
                    gdjz(".park_a",'baby_move',0);
                    // park动画完

                    // create_con动画
                    gdjz(".createA",'baby_move',0);
                    // create_con动画完

                    // create_con图片动画
                    gdjz(".create_con img:nth-of-type(1)",'baby_move',0);
                    gdjz(".create_con img:nth-of-type(2)",'baby_move',0);
                    gdjz(".create_con img:nth-of-type(3)",'baby_move',-20);
                    // create_con图片动画完

                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                    }
                );
            });

        }else if(window.location.href=="http://localhost:3000/Teach"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }

            $(document).ready(function() {
                $(window).scroll(function(){
                    // brand字动画
                        gdjz(".brand",'teach_move',300);
                    // brand字动画完

                    // leader_one动画
                    // 框
                    gdjz(".leader_one_l",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_one_l img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_one_r",'teach_move',300);
                    // 字完
                    // leader_one动画完

                    // leader_two动画
                    // 框
                    gdjz(".leader_two_r",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_two_r img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_two_l",'teach_move',300);
                    // 字完
                    // leader_two动画完

                    // leader_three动画
                    // 框
                    gdjz(".leader_three_l",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_three_l img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_three_r",'teach_move',300);
                    // 字完
                    // leader_three动画完


                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                    }
                );
            });

        }else if(window.location.href=="http://localhost:3000/forward"){
            function gdjz(div,cssname,offset){
                var a,b,c,d;
                d=$(div).offset().top;
                a=eval(d + offset);
                b=$(window).scrollTop();
                c=$(window).height();
                if(b+c>a){
                    $((div)).addClass((cssname));
                }
            }

            // footer动画
            $(document).ready(function() {
                $(window).scroll(function(){
                        gdjz(".footerIn",'moveFooter',300);
                    }
                );
            });
            // footer动画完
        }
    }
    componentDidMount() {
        // 滚轮事件
        /* 添加滑轮事件*/
        if (window.addEventListener) {
            document.addEventListener('scroll', this.bodyScroll,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll);
        }
        // 滚轮事件完
        $.ajax({
            url:'http://192.168.43.5:8005/text',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({nav:a});
                var nav=document.getElementById('nav');
                var navLi=nav.getElementsByTagName('li');

                var index=0;
                var index2=0;
                navLi[0].style.color='#4bb344';
                navLi[0].classList.add('navColor');
                for(var i=0;i<navLi.length;i++){
                    navLi[i].index=i;

                    // navLi[0].classList.add('navColor');
                    navLi[i].onclick=function () {

                        navLi[index].classList.remove('navColor');
                        navLi[index].style.color='';
                        index=this.index;
                        this.style.color='#4bb344';
                        this.classList.add('navColor');

                    };

                }
            }.bind(this)
        });
        // footer背景
        var footer = document.getElementById("App-footer");
        footer.style.backgroundImage = `url("${this.state.foot.bg}")`;
    };
    render(){
        return (
            <Router>
            <div>
               {/*@media screen and (min-width:1000px){*/}

               <div className="wrap">
               <div className="box">
               {/*头部 start*/}
               <div className="head">
                   {/*logo start*/}
                   <div className="logo">
                       <span>School</span>&#x3000;
                       <span>Design</span>
                       <span>专注于激发孩子们学习兴趣</span>
                   </div>
                       {/*logo end*/}
                       {/*报名 start*/}
                   <div className="phone">
                        <p>报名热线</p>
                        <p>{this.state.tel.tel}</p>
                   </div>
                   <div className="tel">
                         <img src="img/phone.png"/>
                   </div>
                   <div className="clear"></div>
                   {/*报名 end*/}
                   </div>
                        </div>
                        {/*头部end*/}
                        {/*导航 start*/}
                        <div className="nav">
                            <div className="box">
                                <ul className="list" id="nav">
                                    {this.state.nav.map(function (e, i) {
                                        return <Link to={e.r} key={i}>
                                            <li key={e.id}>{e.title}</li>
                                        </Link>
                                    })}
                                    <div className="clear"></div>
                                </ul>
                            </div>
                        </div>
                        {/*导航 end*/}
                        {/*<Forward/>*/}
                        {/*change start*/}
                        <div className="center">
                            <Route exact path="/" component={Main}/>
                            <Route path="/ConB" component={ConB}/>
                            <Route path="/Education" component={Education}/>
                            <Route path="/Baby" component={Baby}/>
                            <Route path="/Teach" component={Teach}/>
                            <Route path="/forward" component={Forward}/>
                        </div>
                        {/*change end*/}
                        {/*footer*/}
                        {/*// Appfooter  START*/}
                        <div className="App-footer" id="App-footer">
                            <div className="footer">
                                {/*appfooterLeft*/}
                                <div className="footerIn" id="footerIn">
                                    <div className="footer-left">
                                        <p>{this.state.foot.con1}</p>
                                        <div className="footerContact">
                                            <img src={this.state.foot.img} alt="地点"/>
                                            <div>
                                                {this.state.contact.map(function (con, i) {
                                                    return <p key={i}>{con.link}</p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer-right*/}
                                    <div className="footer-right">
                                        <p>姓名</p>
                                        <input type="text"/>
                                        <p>描述</p>
                                        <textarea></textarea>
                                        <button>提交</button>
                                    </div>
                                </div>
                                {/*底部*/}
                                <p className="footer-pA">{this.state.bottom.copy}</p>
                                <p className="footer-pB">{this.state.bottom.phone}</p>
                            </div>
                        </div>
                    {/*// Appfooter  END*/}
                </div>

                {/*}*/}
                    {/*@media screen and (max-width:414px){*/}
                    {/*<div className="App">*/}
                        {/*<HeaderP/>*/}
                        {/*<HomeP/>*/}
                    {/*</div>*/}
                {/*}*/}
            </div>
            </Router>

        );
    }
}

export default App;

