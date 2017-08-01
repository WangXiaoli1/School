import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel } from 'antd';
import $ from 'jquery';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            banner: [],
            "content": {
                "bg": "img/bgA.jpg"
            },
            main_con: [],
            special: [],
            "btn": {"btn": "我要预约"},
            side_l: [],
            side_r: [],
            school: [],
        }
    }
    bodyScroll1(){
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
    // componentWillUnmount(){
    //
    //     document.removeEventListener('scroll', this.bodyScroll1);
    // }
    componentDidUpdate(){
        if (document.addEventListener) {

            document.addEventListener('scroll', this.bodyScroll1,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll1);
        }
    }
    componentDidMount() {

        $.ajax({
            url: 'http://192.168.43.5:8005/main',
            type: 'get',
            success: function (b) {
                this.setState({main_con: b});
            }.bind(this)
        });


        $.ajax({
            url: 'http://192.168.43.5:8005/special',
            type: 'get',
            success: function (b) {
                this.setState({special: b});
            }.bind(this)
        });

        $.ajax({
            url: 'http://192.168.43.5:8005/side_l',
            type: 'get',
            success: function (b) {
                this.setState({side_l: b});
            }.bind(this)
        });

        $.ajax({
            url: 'http://192.168.43.5:8005/side_r',
            type: 'get',
            success: function (b) {
                this.setState({side_r: b});
            }.bind(this)
        });


        $.ajax({
            url: 'http://192.168.43.5:8005/school',
            type: 'get',
            success: function (b) {
                this.setState({school: b});
            }.bind(this)
        });




        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner/banner",
            success: function (e) {
                this.setState({banner:e});
                console.log(this.state.banner)
            }.bind(this)
        });

        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/main_side_l/sides",
            success: function (e) {

            }
        });

        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/main_side_r/sides_r",
            success: function (e) {

            }
        });

        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/main_school/school",
            success: function (e) {

            }
        });
    }

    render() {
        return (
            <div>
                {/*pc端*/}
            <div className="wrap">
                {/*轮播  start*/}
                <div className="banner">
                    <Carousel autoplay>
                        <div>
                            {this.state.banner.map(function (v,i) {
                                return    <div><img src={v.scr}/></div>
                            })}
                        </div>

                    </Carousel>

                </div>
                <div className="arrow-r">&gt;</div>
                <div className="arrow-l">&lt;</div>
                {/*轮播 end*/}
                <div className="content" id="content">
                    <div className="box">
                        {/*课程列表 start*/}
                        <ul className="con">
                            {this.state.main_con.map(function (e, i) {
                                return <li key={e.id} className="conLi">
                                    <img src={e.src} alt=""/>
                                    <div className="txt" ref="txt">
                                        <h2>{e.txt}</h2>
                                        <p>{e.txt1}</p>
                                        <h6></h6>
                                    </div>
                                </li>
                            })}
                        </ul>

                        {/*课程列表  end*/}
                        {/*特色课程  start*/}
                        <div className="special" id="girl">
                            <div className="course">
                                {this.state.special.map(function (e) {
                                    return <div>
                                        <h1>{e.course}</h1>
                                        <b>{e.txt}</b>
                                        <p>{e.con}</p>
                                    </div>
                                })}
                            </div>
                            <Link to="/forward"><input type="button" value={this.state.btn.btn} className="btn"/></Link>
                        </div>
                        {/*特色课程  end*/}
                        {/*彩绘课程  start*/}
                        <div className="course_a">
                            <div className="side_l">
                                <div className="one" id="one">

                                    {this.state.side_l.map(function (e) {
                                        return <div>
                                            <h1>{e.course}</h1>
                                            <h4>{e.txt}</h4>
                                            <p>{e.con}</p>
                                        </div>

                                    })}
                                </div>
                                <div className="two" id="two">
                                    {this.state.side_l.map(function (e) {
                                        return <div>
                                            <img src={e.src2} alt=""/>
                                        </div>
                                    })}
                                </div>
                            </div>

                            {/*<div >*/}
                            {this.state.side_r.map(function (e) {
                                return <div className="side_r">
                                    <img src={e.src1}/>
                                    <img src={e.src2}/>
                                    <img src={e.src4}/>
                                    <div className="edu">
                                        <h1>{e.course}</h1>
                                        <h4>{e.txt}</h4>
                                        <p>{e.con}</p>
                                    </div>
                                </div>
                            })}
                            <div id="xhr"></div>
                            {/*</div>*/}
                            <div className="clear"></div>
                        </div>
                        {/*彩绘课程  end*/}
                        {/*学校环境 start*/}
                        <div className="school">

                            {this.state.school.map(function (e) {
                                return <div className="school_l">
                                    <h1>{e.title}</h1>
                                    <h4>{e.txt}</h4>
                                    <p>{e.con}</p>
                                    <p>{e.intro}</p>
                                    <img src={e.src1} alt="" className=""/>
                                </div>
                            })}
                            {this.state.school.map(function (e) {
                                return <img src={e.src2} alt="" className=""/>
                            })}
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/*学校环境 end*/}
                </div>
                <div className="blank"></div>
            </div>
                {/*pc端完*/}
                {/*移动端*/}
                <div className="phoneA">
                    {/*banner  start*/}
                    <div className="bannerP">
                        <img src="../img/bC.jpg" alt=""/>
                        <img src="../img/bD.jpg" alt=""/>
                    </div>
                    {/*banner  end*/}
                    {/*specialP  start*/}
                    <div className="specialP">
                        <div>特色活动</div>
                        <div>描绘世界</div>
                        <div>亲子乐园</div>
                        <div>最新资讯</div>
                    </div>
                    {/*specialP end*/}
                    {/*特色课程 start*/}
                    <div className="myClassP_A">
                        <h2>特色课程</h2>
                        <h3>LEARNING INTEREST</h3>
                        <div className="myClassPAIn">
                            <img src="../img/girlP.png" alt=""/>
                            <p>课程会让孩子们在每月的不同主题中得到非凡的学习体验。伊顿主题课程将孩子日常生活中的方方面面
                                进行合理整合。
                                我要预约
                            </p>
                        </div>
                    </div>
                    {/*特色课程  end*/}
                    <img src="../img/class.jpg" alt="" className="pic"/>
                    {/*彩绘课程 start*/}
                    <div className="myClassP_B">
                        <h2>彩绘课程</h2>
                        <h3>LEARNING INTEREST</h3>
                        <p>为他们发展更好的逻辑思维能力打下基础。
                            伊顿专业的老师和教育专家们将富有创造力的教学主体和教学环境建立在丰富的蒙台梭利材料之上，
                            每个月变换不同的主题，全年不间断。
                        </p>
                    </div>
                    {/*彩绘课程  end*/}
                    {/*品格教育  start*/}
                    <div className="myClassP_C">
                        <img src="../img/girl-a.jpg" alt=""/>
                        <div className="edu">
                            <h2>品格教育</h2>
                            <h3>LEARNING INTEREST</h3>
                            <p>让孩子们学会对身边的事物、动物、理念等进行区别和分类。为他们发展
                                更好的
                            </p>
                        </div>
                    </div>
                    {/*品格教育  end*/}
                    <img className="schoolImg" src="../img/school.png"/>
                    {/*学校环境  start*/}
                    <div className="schoolTxt">
                        <p>学校环境</p>
                        <p>LEARNING INTEREST</p>
                        <p>作为中外知名的双语学前教育机构，引进一流的教育管理模式、
                            融合国内外先进的教研成果、
                            拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。</p>
                    </div>
                    {/*学校环境  end*/}
                </div>
                {/*移动端完*/}
            </div>
        );
    }
}
export default Main;