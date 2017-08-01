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
            introduce:[],
        }
    }
    bodyScroll(){
        function gdjz(div,cssname,offset){
            var a,b,c,d;
            d=$(div).offset().top;
            console.log(1);
            a=eval(d + offset);
            b=$(window).scrollTop();
            c=$(window).height();
            if(b+c>a){
                $((div)).addClass((cssname));
            }
        }


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
                    // gdjz(".footerIn",'moveFooter',300);
                    // footer动画完


    }

    componentDidUpdate(){
        setInterval(function () {
            if (document.addEventListener) {
                document.addEventListener('scroll', this.bodyScroll1,false);
            } else {
                document.attachEvent('onscroll', this.bodyScroll1);
            }
        },1000)
    }
    componentDidMount=function () {
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


        // 图片

        //banner
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner2/banner2",
            success: function (e) {
                this.setState({banner2:[e[0].src]});
            }.bind(this)
        });
        // 照片墙
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/conB_picture/get",
            success: function (e) {
                this.setState({picture:e});
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
                // picture的悬浮黑条出现部分效果完
            }.bind(this)
        });
        // 照片墙完
        //介绍
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/intro/intro",
            success: function (e) {
                console.log(e)

            }.bind(this)
        });
        // 介绍完
    };
    render() {
        return (
            // 园所概况
            <div>
                {/*PC端*/}
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
                {/*PC端完*/}
                {/*移动端*/}
                <div className="gardenWrap">
                    {/*学校环境 start*/}
                    <h2 className="schoolH">学校环境</h2>
                    {/*学校环境 end*/}
                    {/*studentP  start*/}
                    <div className="studentP">
                        <img src="../img/student-a.jpg" alt=""/>
                        作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、秉承最适合儿童成长的教育理念，同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。
                    </div>
                    {/*studentP  end*/}
                    {/*gardenT  start*/}
                    <div className="gardenT">
                        <p>每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。
                        </p>
                        <p>同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。
                        </p>
                    </div>
                    {/*gardenT  end*/}
                </div>
                {/*移动端完*/}


            </div>

        );
    }
}

export default ConB;