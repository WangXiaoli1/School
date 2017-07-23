import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel } from 'antd';

// import phone from 'img/phone.png';
class Main extends Component {
  constructor(){
      super();
      this.data={
           "banner":{
               "banner_a":"img/bC.jpg",
               "banner_b":"img/bD.jpg"
           },
          "content":{
               "bg":"img/bgA.jpg"
          },
          "con":[
              {"img":"img/circle-a.png","txt":"特色活动","txt1":"SPECIAL EVENTS"},
              {"img":"img/circle-b.png","txt":"描绘世界","txt1":"SPECIAL EVENTS"},
              {"img":"img/circle-c.png","txt":"亲子乐园","txt1":"SPECIAL EVENTS"},
              {"img":"img/circle-d.png","txt":"最新资讯","txt1":"SPECIAL EVENTS"},
              ],
          "special":{
              "img":"../img/girl.png",
              "course":"特色课程",
              "txt":"LEARNING INTEREST",
              "con":" 课程会让孩子们在每月的不同主题中得到非凡的学习体验。伊顿主题课程将孩子日常生活中的方方面面进行合理整合,让孩子们学会对身边的事物、动物、理念等进行区别和分类。为他们发展更好的逻辑思维能力打下基础。伊顿专业的老师和教育专家们将富有创造力的教学主体和教学环境建立在丰富的蒙台梭利材料之上，每个月变换不同的主题，全年不间断。"
              },
          "btn":{"btn":"我要预约"},
          "side_l":{
              "img":"../img/count.jpg",
              "img1":"../img/girl-a.jpg",
              "course":"彩绘课程",
              "txt":"LEARNING INTEREST",
              "con":"为他们发展更好的逻辑思维能力打下基础。伊顿专业的老师和教育专家们将富有创造力的教学主体和教学环境建立在丰富的蒙台梭利材料之上，每个月变换不同的主题，全年不间断。"
          },
          "side_r":{
              "img1":"../img/class.jpg",
              "img2":"../img/girl-b.jpg",
              "img3":"../img/edu.jpg",
              "img4":"../img/xhr.png",
              "course":"品格教育",
              "txt":"LEARNING INTEREST",
              "con":"让孩子们学会对身边的事物、动物、理念等进行区别和分类。为他们发展更好的逻辑思维能力打下基础。全年不间断。"
          },
          "school":{
              "title":"学校环境",
              "txt":"LEARNING INTEREST",
              "con":"作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。",
              "intro":"每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。",
              "img":"../img/xhr-a.jpg",
              "img1":"../img/school.png"
          }

      }
  }
  componentDidMount() {
          var girl = document.getElementById("girl");
          girl.style.backgroundImage = `url("${this.data.special.img}")`;

          var one = document.getElementById("one");
          one.style.backgroundImage = `url("${this.data.side_l.img}")`;

          var two = document.getElementById("two");
          two.style.backgroundImage = `url("${this.data.side_l.img1}")`;

          var img_a = document.getElementById("img_a");
          img_a.style.backgroundImage = `url("${this.data.side_r.img1}")`;

          var img_b = document.getElementById("img_b");
          img_b.style.backgroundImage = `url("${this.data.side_r.img2}")`;

          var img_c = document.getElementById("img_c");
          img_c.style.backgroundImage = `url("${this.data.side_r.img3}")`;

          var xhr = document.getElementById("xhr");
          xhr.style.backgroundImage = `url("${this.data.side_r.img4}")`;

          var xhr_a = document.getElementById("xhr_a");
          xhr_a.style.backgroundImage = `url("${this.data.school.img}")`;

          var school = document.getElementById("school");
          school.style.backgroundImage = `url("${this.data.school.img1}")`;

          var content = document.getElementById("content");
          content.style.backgroundImage = `url("${this.data.content.bg}")`;
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
                        {this.data.con.map(function(con,i){
                            return <li key={i}>
                                <img src={con.img} alt=""/>
                                <div className="txt">
                                    <h2> {con.txt}</h2>
                                    <p>{con.txt1}</p>
                                    <h6></h6>
                                </div>
                            </li>
                        })}
                    </ul>
                    {/*课程列表  end*/}
                    
                    {/*特色课程  start*/}
                      <div className="special" id="girl">
                          <div className="course">
                              <h1>{this.data.special.course}</h1>
                              <b>{this.data.special.txt}</b>
                              <p>
                                  {this.data.special.con}
                              </p>
                          </div>
                          <Link to="/forward"><input type="button" value={this.data.btn.btn} className="btn"/></Link>
                      </div>
                    {/*特色课程  end*/}
                    {/*彩绘课程  start*/}
                       <div className="course_a">
                           <div className="side_l">
                               <div className="one" id="one">
                                   <h1>{this.data.side_l.course}</h1>
                                   <h4>{this.data.side_l.txt}</h4>
                                   <p>{this.data.side_l.con}</p>
                               </div>
                               <div className="two" id="two"></div>
                           </div>

                           <div className="side_r">
                               <div id="img_a"></div>
                               <div id="img_b"></div>
                               <div id="img_c">
                                   <h1>{this.data.side_r.course}</h1>
                                   <h4>{this.data.side_r.txt}</h4>
                                   <p>{this.data.side_r.con}</p>
                               </div>
                               <div id="xhr"></div>
                           </div>
                           <div className="clear"></div>
                       </div>
                    {/*彩绘课程  end*/}
                    {/*学校环境 start*/}
                        <div className="school">
                            <div className="school_l">
                                <h1>{this.data.school.title}</h1>
                                <h4>{this.data.school.txt}</h4>
                                <p>{this.data.school.con}</p>
                                <p>{this.data.school.intro}</p>
                                <div id="xhr_a"></div>
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

