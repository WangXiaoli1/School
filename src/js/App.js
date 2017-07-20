import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


import '../css/App.css';
import '../css/Main.css';
import '../css/ConB.css';
import '../css/Education.css';
import '../css/Baby.css';
import '../css/Teach.css';
import '../css/Forward.css';





import Main from './Main';
import ConB from './ConB';
import Education from './Education';
import Baby from './Baby';
import Teach from './Teach';
import Forward from './Forward';


class App extends Component {
    constructor () {
        super();
        this.data = {
            "nav": [
                {"title": "首页","r":"/"},
                {"title": "园所概况","r":"/ConB"},
                {"title": "教育天地","r":"/Education"},
                {"title": "宝宝乐园","r":"/Baby"},
                {"title": "教师风采","r":"/Teach"}
              ],
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
    componentDidMount=function () {
        var nav=document.getElementById('nav');
        var navLi=nav.getElementsByTagName('li');
        for(var i=0;i<navLi.length;i++){
            navLi[i].style.backgroundColor='#4bb344';
            navLi[i].style.color='#fff';
            navLi[0].style.backgroundColor='#fff';
            navLi[0].style.color='#4bb344';
            navLi[i].onclick=function () {
                for(var i=0;i<navLi.length;i++){
                    navLi[i].style.backgroundColor='#4bb344';
                    navLi[i].style.color='#fff';
                }
                this.style.backgroundColor='#fff';
                this.style.color='#4bb344';
            };
            // 悬浮
            navLi[i].onmouseover=function () {
                this.style.backgroundColor='#fff';
                this.style.color='#4bb344';
            };
            navLi[i].onmouseout=function () {
                this.style.backgroundColor='#4bb344';
                this.style.color='#fff';
            }
        }
        var footer = document.getElementById("App-footer");
        footer.style.backgroundImage = `url("${this.data.foot.bg}")`;
    };

    render(){
        return (
            <Router>
            <div className="wrap">
                <div className="box">
                    {/*头部 start*/}
                    <div className="head">
                        {/*logo start*/}
                        <div className="logo">
                            <span>School</span>
                            &#x3000;
                            <span>Design</span>
                            <span>专注于激发孩子们学习兴趣</span>
                        </div>
                        {/*logo end*/}
                        {/*报名 start*/}
                        <div className="phone">
                            <p>报名热线</p>
                            <p>{this.data.tel.tel}</p>
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
                            {this.data.nav.map(function(con,i){
                                return <Link to={con.r}><li>{con.title}
                                </li></Link>
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
                        <div className="footer-left">
                            <p>{this.data.foot.con1}</p>
                            <div className="footerContact">
                                <img src={this.data.foot.img} alt="地点"/>
                                <div>
                                    {this.data.contact.map(function(con){
                                        return <p>{con.link}
                                        </p>
                                    })}
                                </div>
                            </div>
                        </div>
                        {/*footer-right*/}
                        <div className="footer-right">
                            <p>姓名</p>
                            <input type="text"/>
                            <p>描述</p>
                            <textarea>
                        </textarea>
                            <button>提交</button>
                        </div>
                        {/*底部*/}
                        <p className="footer-pA">{this.data.bottom.copy}</p>
                        <p className="footer-pB">{this.data.bottom.phone}</p>
                    </div>
                </div>
                {/*// Appfooter  END*/}
            </div>
                </Router>
        );
    }
}

export default App;

