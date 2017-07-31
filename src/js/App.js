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

    componentDidMount() {
        // 滚轮事件
        /* 添加滑轮事件*/
        // if (window.addEventListener) {
        //     document.addEventListener('scroll', this.bodyScroll,false);
        // } else {
        //     document.attachEvent('onscroll', this.bodyScroll);
        // }
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
    // componentWillUnMount(){
    //     if (window.addEventListener) {
    //         document.addEventListener('scroll', this.bodyScroll,false);
    //     } else {
    //         document.attachEvent('onscroll', this.bodyScroll);
    //     }
    // }
    // // React.unmountComponentAtNode(box);

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

