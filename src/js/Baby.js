/**
 * Created by Administrator on 2017/7/19 0019.
 */
import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Baby extends Component{
    constructor(){
        super();
        this.data={
            "banner":{
                "img":"img/banner-b.jpg"
            },
            "model":[
                {"txt":"孩子是祖国的未来和希望"},
                {"txt":"EDUCATIONAL MANAGEMENT MODEL"},
                {"txt":"专注于激发孩子们学习兴趣、食品认知能力、动手能力、我们坚信，伊顿的孩子会拥有这样的核心价值——多元文化的情商和胸怀、优良的品格和超凡的创造力！"}
            ],
            "btn":{"btn":"我要预约"},
            "park":[
                {"txt":"亲子主题乐园"},
                {"txt":"PARENT-CHILD THEME PARK"},
                {"txt":"科学教育，均衡发展，为孩子提供一个健康快乐的"},
                {"txt":"成长环境，树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。"}
            ],
            "create_con":[
                {"txt":"全面激发孩子的好奇心"},
                {"txt":"乐享艺术课程,帮助孩子们激发无限的创想力"},
                {"txt":"没有什么能比艺术更能全面激发孩子创造力和想象力了！爱乐创意美术课程，绝不仅仅是让孩子在老师的指导下完成一件简单的手工作品，而是通过游戏的方式，给孩子提供自己动手的平台，以音乐为媒介，以艺术为手段，全面激发孩子的好奇心、创新精神和自我内心表达的能力。在我们的课堂里，孩子们自己动手，不断探索，感受七彩多变的艺术世界，通过绘画、雕塑、素描、拼贴画、歌唱、角色扮演等不同的艺术表现方式以及富于想象的适龄活动，帮助孩子们激发无限的创想力，帮助家长了解孩子们的内心世界。"},
            ],
            "create_img":[
                {"img":"img/baby-a.jpg"},
                {"img":"img/baby-b.jpg"},
                {"img":"img/baby-c.jpg"},
            ]

        }
    }
    render(){
        return(
            <div className="wrapD">
                {/*banner start*/}
                <div className="bannerD">
                    <img src={this.data.banner.img} alt=""/>
                </div>
                {/*banner end*/}
                {/*baby start*/}
                <div className="baby">
                    <div className="box">
                        <div className="model">
                            {this.data.model.map(function (con) {
                                return <p>{con.txt}</p>
                            })}
                            <Link to="/forward"><input type="button" value={this.data.btn.btn}/></Link>
                        </div>
                    </div>
                </div>
                {/*baby end*/}
                {/*park start*/}
                <div className="park">
                    <div className="box">
                        <div className="park_a">
                            {this.data.park.map(function (con) {
                                return <p>{con.txt}</p>
                            })}
                            <Link to="/forward"><input type="button" value={this.data.btn.btn}/></Link>
                        </div>
                    </div>
                </div>
                {/*park end*/}
                {/*create start*/}
                <div className="create">
                    <div className="box">
                        <div className="create_con">
                            {this.data.create_con.map(function (con) {
                                return <p>{con.txt}</p>
                            })}
                            {this.data.create_img.map(function (img) {
                                return <img src={img.img} alt=""/>
                            })}
                        </div>
                    </div>
                </div>
                {/*create end*/}
            </div>
        )
    }
}
export default Baby;
