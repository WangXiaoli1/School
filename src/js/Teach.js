/**
 * Created by Administrator on 2017/7/19 0019.
 */
import React,{Component} from 'react';
class Teach extends Component{
    constructor(){
        super();
        this.data={
            "banner":{"img":"img/bannerE.jpg"},
            "brand":[
                {"txt":"树立幼教品牌，打造威海一流优质园"},
                {"txt":"专注于激发孩子们学习兴趣、食品认知能力、动手能力、" +
                "我们坚信，伊顿的孩子会拥有这样的核心价值——多元文化的情商和胸怀、" +
                "优良的品格和超凡的创造力！"},
                {"txt":"—"}
            ],
          // leaderOne:[],
            "leader_one_l":{"img":"img/teacher-a.jpg"},
            "leader_one_r1":{"txt1":"业务园长"},
            "leader_one_r2":{"txt2":"张莹 / ZHANGYING"},
            "leader_one_r3":{"txt3":"应用全新的教育理念，以儿童为中心，运用新颖的教具，多元情景模式教学，多方面能力训练，大容量的认知，培养幼儿的观察力、认知力、辨别力、想象力、锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。"},

            "leader_two_r":{"img":"img/teacher-b.jpg"},
            "leader_two_l1":{"txt1":"副园长"},
            "leader_two_l2":{"txt2":"杨晓英 / ZHANGYING"},
            "leader_two_l3":{"txt3":"应用全新的教育理念，以儿童为中心，运用新颖的教具，" +
            "多元情景模式教学，多方面能力训练，大容量的认知，" +
            "培养幼儿的观察力、认知力、辨别力、想象力、" +
            "锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，" +
            "省级示范园，民办教育的窗口。"},


            "leader_three_l":{"img":"img/teacher-c.jpg"},
            "leader_three_r1":{"txt1":"教育主任"},
            "leader_three_r2":{"txt2":"李向丽 / ZHANGYING"},
            "leader_three_r3":{"txt3":"应用全新的教育理念，以儿童为中心，运用新颖的教具，多元情景模式教学，多方面能力训练，大容量的认知，培养幼儿的观察力、认知力、辨别力、想象力、锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。"},

        }
    }
    render(){
        return(
            <div className="wrapE">
                {/*banner start*/}
                <div className="bannerE">
                    <img src={this.data.banner.img} alt=""/>
                </div>
                {/*banner end*/}
                <div className="teacher">
                    <div className="box">
                        <div className="teacher_div">
                            {/*brand start*/}
                              <div className="brand">
                                  {this.data.brand.map(function (con) {
                                      return <p>{con.txt}</p>
                                  })}
                              </div>
                            {/*brand end*/}
                            {/*leader start*/}
                                <div className="leader">

                                    <div className="leader_one_l">
                                        <img src={this.data.leader_one_l.img} alt=""/>
                                    </div>
                                    <div className="leader_one_r">
                                        <h4>{this.data.leader_one_r1.txt1}</h4>
                                        <h4>{this.data.leader_one_r2.txt2}</h4>
                                        <p className="line"></p>
                                        <h4>{this.data.leader_one_r3.txt3}</h4>
                                    </div>
                                    <div className="clear"></div>

                                    <div className="leader_two_l">
                                        <h4>{this.data.leader_two_l1.txt1}</h4>
                                        <h4>{this.data.leader_two_l2.txt2}</h4>
                                        <p className="line"></p>
                                        <h4>{this.data.leader_two_l3.txt3}</h4>
                                    </div>
                                    <div className="leader_two_r">
                                        <img src={this.data.leader_two_r.img} alt=""/>
                                    </div>
                                    <div className="clear"></div>


                                    <div className="leader_three_l">
                                        <img src={this.data.leader_three_l.img} alt=""/>
                                    </div>
                                    <div className="leader_three_r">
                                        <h4>{this.data.leader_three_r1.txt1}</h4>
                                        <h4>{this.data.leader_three_r2.txt2}</h4>
                                        <p className="line"></p>
                                        <h4>{this.data.leader_three_r3.txt3}</h4>
                                    </div>
                                    <div className="clear"></div>

                                </div>
                            {/*leader end*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Teach;