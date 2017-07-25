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
            "banner":{"img":"img/bA.jpg"},
            environment:[],
            // "environment": {
            //     "title": "学校环境",
            //     "enTitle":"LEARNING INTEREST",
            //     "leftA":"作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、秉承最适合儿童成长的教育理念，同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。",
            //     "leftB":"每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。",
            //     "leftC":"同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境",
            //     "rightA":"每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。儿童教育，其实不只是大人如何教育孩子，也是孩子如何教育大人，让大人成为更加完善的人，更加领悟生活真谛的人。"
            // },
            "picture":[
                {"img":"../img/student-a.jpg"},
                {"img":"../img/pic-e.jpg"},
                {"img":"../img/pic-f.jpg"},
                {"img":"../img/student-b.jpg"}
            ],

            introduce:[],
            // "introduce":{
            //     "img":"img/teacher.png",
            //     "title":"为孩子的未来撑起一片天空！",
            //     "enTitleA":"儿童教育，其实不只是大人如何教育孩子，也是孩子如何教育大人，让大人成为更加完",
            //     "enTitleB":"善的人，更加领悟生活真谛的人。",
            //     "conA":"作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、秉承最适合儿童成长的教育理念，",
            //     "conB":"同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，打造了最适合孩子健康成长的校",
            //     "conC":"园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。",
            //     "btn":"我要预约"
            //
            // }


        }
    }
    componentDidMount=function () {
        // picture部分的悬浮黑条出现效果
        var picture=document.getElementById('picture');
        var picDiv=picture.getElementsByTagName('div');
        var picSpan=picture.getElementsByTagName('span');

        for (var i=0;i<picDiv.length;i++){
            picDiv[i].style.backgroundImage=`url("${this.state.picture[i].img}")`;
            picDiv[i].onmouseover=function () {
                this.children[0].style.bottom='0px'
            }
            picDiv[i].onmouseout=function () {
                this.children[0].style.bottom='-5px'
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

    };
    render() {
        return (
            // 园所概况
            <div className="wrapB">
                <img src={this.state.banner.img} alt="" className="bannerB"/>
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
                    {/*<div className="pictureWrap">*/}
                        <div className="picture" id="picture">
                            <div id="pictureA"><span></span></div>
                            <div id="pictureB"><span></span></div>
                            <div id="pictureC"><span></span></div>
                            <div id="pictureD"><span></span></div>
                        </div>
                    {/*</div>*/}
                    {/*introduce*/}
                    {/*<div className="introduceWrap">*/}
                        {/*<div className="introduce" id="introduce">*/}
                            {this.state.introduce.map(function (e,i) {
                                return <div className="introduce" id="introduce" key={i}>
                                    <img src={e.img} alt="" id="introduceA"/>
                                    <h2 id="introduceB">{e.title}</h2>
                                    <h3 id="introduceC">{e.enTitleA}</h3>
                                    <h3 id="introduceD">{e.enTitleB}</h3>
                                    <b id="introduceE"></b>
                                    <p id="introduceF">{e.conA}</p>
                                    <p id="introduceG">{e.conB}</p>
                                    <p id="introduceH">{e.conC}</p>
                                    <Link to="/forward"><button id="introduceI">{e.btn}</button></Link>
                                </div>
                            })}
                            {/*<img src={this.state.introduce.img} alt="" id="introduceA"/>*/}
                            {/*<h2 id="introduceB">{this.state.introduce.title}</h2>*/}
                            {/*<h3 id="introduceC">{this.state.introduce.enTitleA}</h3>*/}
                            {/*<h3 id="introduceD">{this.state.introduce.enTitleB}</h3>*/}
                            {/*<b id="introduceE"></b>*/}
                            {/*<p id="introduceF">{this.state.introduce.conA}</p>*/}
                            {/*<p id="introduceG">{this.state.introduce.conB}</p>*/}
                            {/*<p id="introduceH">{this.state.introduce.conC}</p>*/}
                            {/*<Link to="/forward"><button id="introduceI">{this.state.introduce.btn}</button></Link>*/}
                        </div>
                    </div>
                // </div>
            // </div>
        );
    }
}

export default ConB;