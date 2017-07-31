/**
 * Created by Administrator on 2017/7/17.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
class ConB extends Component {
    constructor () {
        super();
        this.state = {
            environment:[],

            picture:[],

            // "picture":[
            //     {"img":"../img/student-a.jpg"},
            //     {"img":"../img/pic-e.jpg"},
            //     {"img":"../img/pic-f.jpg"},
            //     {"img":"../img/student-b.jpg"}
            // ],
            //

            introduce:[],
        }
    }
    componentDidMount=function () {
        // picture部分的悬浮黑条出现效果
        var picture=document.getElementById('picture');
        var picDiv=picture.getElementsByTagName('div');
        var picSpan=picture.getElementsByTagName('span');

        for (var i=0;i<picDiv.length;i++){
            picDiv[i].onmouseover=function () {
                this.children[1].style.bottom='0px'
            }
            picDiv[i].onmouseout=function () {
                this.children[1].style.bottom='-5px'
            }
        }
        // picture部分效果完
        // 动画效果
        $.ajax({
            url:'http://192.168.43.5:8005/conBenvir',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({environment:a});
            }.bind(this)
        });
        $.ajax({
            url:'http://192.168.43.5:8005/conB_introduce',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({introduce:a});
            }.bind(this)
        });




        // function moveX(id,t) {
        //     var obj=document.getElementById(id);
        //     var timer='';
        //     var screenW=document.documentElement.offsetWidth;
        //     // obj.parentNode.style.overflow='hidden';
        //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //     timer=setInterval(function () {
        //         obj.style.transition=t+"s";
        //         obj.style.transform="translateX("+0+")";
        //     },500)
        // }
        // // environment部分动画
        // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // moveX('environment',0.5);
        //
        // // picture部分动画
        // function pictureMoveX(id,t) {
        //     var obj=document.getElementById(id);
        //     var timer='';
        //     var screenW=document.documentElement.offsetWidth;
        //     // obj.parentNode.style.overflow='hidden';
        //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //     timer=setInterval(function () {
        //         obj.style.transition=t+"s";
        //         obj.style.transform="translateX("+0+")";
        //     },500)
        // }
        // pictureMoveX('pictureA',0.5);
        // pictureMoveX('pictureB',0.6);
        // pictureMoveX('pictureC',0.5);
        // pictureMoveX('pictureD',0.8);
        //
        // // introduce部分动画
        // moveX('introduceA',0.5);
        // moveX('introduceB',0.4);
        // moveX('introduceC',0.4);
        // moveX('introduceD',0.4);
        // moveX('introduceE',0.5);
        // moveX('introduceF',0.4);
        // moveX('introduceG',0.4);
        // moveX('introduceI',0.5);

        // 图片

        //banner
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner2/banner2",
            success: function (e) {
                this.setState({banner2:[e[0].src]});
            }.bind(this)
        });
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/conB_picture/get",
            success: function (e) {
                this.setState({picture:e});
            }.bind(this)
        });
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/intro/intro",
            success: function (e) {
                console.log(e)

            }.bind(this)
        });
    };
    render() {
        return (
            // 园所概况
            <div className="wrapB">
                <img src={this.state.banner2} alt="" className="bannerB"/>
                <div className="super-conB">
                    {/*environment*/}
                    <div className="environmentWrap">
                        <div className="environment" id="environment">
                            {this.state.environment.map(function (e,i) {
                                return <div  key={i}>
                                    <h2>{e.title}</h2>
                                    <h3>{e.enTitle}</h3>
                                    <div className="environment-left">
                                        <p>{e.leftA}</p>
                                        <p>{e.leftB}</p>
                                        <p>{e.leftC}</p>
                                    </div>
                                    <p className="environment-right">{e.rightA}</p>
                                </div>
                            })}

                        </div>
                    </div>
                    {/*picture*/}
                    <div className="pictureWrap">
                        <div className="picture" id="picture">
                            {this.state.picture.map(function (e,i) {
                                return <div className="movePicture" key={i}><img src={e.src} alt=""/><span></span></div>
                            })}
                        </div>
                    </div>
                    {/*introduce*/}
                    {/*<div className="introduceWrap">*/}
                        <div className="introduce" id="introduce">
                            {this.state.introduce.map(function (e,i) {
                                return <div className="introduce" id="introduce" key={i}>
                                    <img src={e.src} alt="" className="introduceA"/>
                                    <h2 className="introduceB">{e.title}</h2>
                                    <h3 className="introduceC">{e.enTitleA}</h3>
                                    <h3 className="introduceD">{e.enTitleB}</h3>
                                    <b className="introduceE"></b>
                                    <p className="introduceF">{e.conA}</p>
                                    <p className="introduceG">{e.conB}</p>
                                    <p className="introduceH">{e.conC}</p>
                                    <Link to="/forward"><button className="introduceI">{e.btn}</button></Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
        );
    }
}

export default ConB;