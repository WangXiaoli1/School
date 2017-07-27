import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel } from 'antd';
import $ from 'jquery';

// import phone from 'img/phone.png';

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
            url: "http://192.168.43.5:8005/photo/get",
            async: true,
            success: function (e) {
                console.log(e)
                for (var i = 0; i < e.length; i++) {
                    console.log(e[i].src)
                    $('.photo').append('<img src="' + e[i].src + '">');

                }
            }
        });

        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner/banner",
            success: function (e) {
                this.setState({banner: [e[0].src, e[1].src]});
            }.bind(this)
        });


        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/photo/sides",
            success: function (e) {
                console.log(e);
                for (var i = 0; i < e.length; i++) {
                    console.log(e[i].src);
                    $('.photo').append('<img src="' + e[i].src + '">');
                    var one = document.getElementById("one");
                    one.style.backgroundImage = `url("http://192.168.43.5:8005/img/1501036942162 

")`;
                }
            }
        });
        $.ajax({

            type: "get",
            url: "http://192.168.43.5:8005/photo/sides_r",
            success: function (e) {
                console.log(e);
                for (var i = 0; i < e.length; i++) {
                    console.log(e[i].src);
                    $('.photo').append('<img src="' + e[i].src + '">');
                    var one = document.getElementById("one");
                    one.style.backgroundImage = `url("http://192.168.43.5:8005/img/1501036942162 ")`;
                }
            }
        })


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
            <div className="wrap">
                {/*轮播  start*/}
                <div className="banner">
                    <Carousel id="car" autoplay dots="false" arrows="true">
                        <div><img src={this.state.banner[0]} alt=""/></div>
                        <div><img src={this.state.banner[1]} alt=""/></div>
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
                                return <li key={e.id}>
                                    <img src={e.src} alt=""/>
                                    <div className="txt">
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
        );
    }
}
export default Main;
