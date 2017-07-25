import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel } from 'antd';
import $ from 'jquery';

// import phone from 'img/phone.png';
class Main extends Component {
  constructor(){
      super();
      this.state= {
          "banner": {
              "banner_a": "img/bC.jpg",
              "banner_b": "img/bD.jpg"
          },
          "content": {
              "bg": "img/bgA.jpg"
          },
          // "con":[
          //     { "img":"img/circle-a.png"},
          //     { "img":"img/circle-b.png"},
          //     { "img":"img/circle-c.png"},
          //     { "img":"img/circle-d.png"}
          // ],
          main_con: [],
          special: [],
          "btn": {"btn": "我要预约"},
          side_l: [],
          side_r:[],
          school:[],
          // "side_r":{
          //     "img1":"../img/class.jpg",
          //     "img2":"../img/girl-b.jpg",
          //     "img3":"../img/edu.jpg",
          //     "img4":"../img/xhr.png",
          //     "course":"品格教育",
          //     "txt":"LEARNING INTEREST",
          //     "con":"让孩子们学会对身边的事物、动物、理念等进行区别和分类。
             // 为他们发展更好的逻辑思维能力打下基础。全年不间断。"
          // },
      //     "school":{
      //         "title":"学校环境",
      //         "txt":"LEARNING INTEREST",
      //         "con":"作为中外知名的双语学前教育机构，
      //         引进一流的教育管理模式、融合国内外先进的教研成果、
      //         拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。
      //         "intro":"每个校园都是按照国际纯正蒙台梭利校园的特点
      // 和标准精心设计的，充满着温馨关爱的教育氛，
      // 打造了最适合孩子健康成长的校园环境。
      // 经过十年的积累与沉淀，
      // 目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。
      //         "img":"../img/xhr-a.jpg",
      //         "img1":"../img/school.png"
      //     }

      }
  }
  componentDidMount() {
      $.ajax({
          url:'http://192.168.43.5:8005/main',
          type:'get',
          success:function(b){
              console.log(b);
              this.setState({main_con:b});
          }.bind(this)
      });



      $.ajax({
          url:'http://192.168.43.5:8005/special',
          type:'get',
          success:function(b){
              console.log(b);
              this.setState({special:b});
          }.bind(this)
      });

      $.ajax({
          url:'http://192.168.43.5:8005/side_l',
          type:'get',
          success:function(b){
              console.log(b);
              this.setState({side_l:b});
          }.bind(this)
      });

      $.ajax({
          url:'http://192.168.43.5:8005/side_r',
          type:'get',
          success:function(b){
              console.log(b);
              this.setState({side_r:b});
          }.bind(this)
      });


      $.ajax({
          url:'http://192.168.43.5:8005/school',
          type:'get',
          success:function(b){
              console.log(b);
              this.setState({school:b});
          }.bind(this)
      });




      $.ajax({
          type:"get",
          url:"http://192.168.43.5:8005/img/get",
          async:true,
          success:function(e){
              console.log(e)
              for(var i=0;i<e.length;i++){
                  console.log(e[i].src)
                  $('.photo').append('<img src="'+e[i].src+'">')
              }
          }
      });

      var one = document.getElementById("one");
          one.style.backgroundImage = `url("${this.state.side_l.img}")`;

          var two = document.getElementById("two");
          two.style.backgroundImage = `url("${this.state.side_l.img1}")`;

          var img_a = document.getElementById("img_a");
          img_a.style.backgroundImage = `url("${this.state.side_r.img1}")`;

          var img_b = document.getElementById("img_b");
          img_b.style.backgroundImage = `url("${this.state.side_r.img2}")`;

          var img_c = document.getElementById("img_c");
          img_c.style.backgroundImage = `url("${this.state.side_r.img3}")`;

          var xhr = document.getElementById("xhr");
          xhr.style.backgroundImage = `url("${this.state.side_r.img4}")`;

          var xhr_a = document.getElementById("xhr_a");
          xhr_a.style.backgroundImage = `url("${this.state.school.img}")`;

          var school = document.getElementById("school");
          school.style.backgroundImage = `url("${this.state.school.img1}")`;

          var content = document.getElementById("content");
          content.style.backgroundImage = `url("${this.state.content.bg}")`;
      }
  render() {
    return (

        <div className="wrap">
            {/*轮播  start*/}
                <div className="banner">
                    <Carousel autoplay dots="false" arrows="true">
                        <div><img src="img/bC.jpg" alt=""/></div>
                        <div><img src="img/bD.jpg" alt=""/></div>
                    </Carousel>
                </div>
            {/*轮播 end*/}
            <div className="content" id="content">
                <div className="box">
                    {/*课程列表 start*/}
                    <ul className="con">
                        {this.state.main_con.map(function (e,i) {
                            return <li key={e.id} a={i}>
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
                               <div className="two" id="two"></div>
                           </div>

                           <div className="side_r">
                               <div id="img_a"></div>
                               <div id="img_b"></div>
                               <div id="img_c">
                                   {this.state.side_r.map(function (e) {
                                       return <div>
                                           <h1>{e.course}</h1>
                                           <h4>{e.txt}</h4>
                                           <p>{e.con}</p>
                                       </div>
                                   })}
                               </div>
                               <div id="xhr"></div>
                           </div>
                           <div className="clear"></div>
                       </div>
                    {/*彩绘课程  end*/}
                    {/*学校环境 start*/}
                        <div className="school">
                            <div className="school_l">
                                {this.state.school.map(function (e) {
                                    return <div>
                                        <h1>{e.title}</h1>
                                        <h4>{e.txt}</h4>
                                        <p>{e.con}</p>
                                        <p>{e.intro}</p>
                                    </div>
                                })}
                                <div id="xhr_a"></div>


                                {/*<h1>{this.state.school.title}</h1>*/}
                                {/*<h4>{this.state.school.txt}</h4>*/}
                                {/*<p>{this.state.school.con}</p>*/}
                                {/*<p>{this.state.school.intro}</p>*/}
                            </div>
                            <div className="school_r">
                                <div id="school"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    {/*学校环境 end*/}
                </div>
            </div>
        </div>

    );
  }
}
export default Main;
