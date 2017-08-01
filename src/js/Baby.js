/**
 * Created by Administrator on 2017/7/19 0019.
 */
import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
class Baby extends Component{
    constructor(){
        super();
        this.state={
            banner:[],
            model:[],
            "btn":{"btn":"我要预约"},
             park:[],
            parkBg:[],
            create_con:[],
            create_img:[]
        }
    }
    bodyScroll(){
        function gdjz(div,cssname,offset){
            var a,b,c,d;

            d=$(div).offset().top;
            console.log(d)
            a=eval(d + offset);
            b=$(window).scrollTop();
            c=$(window).height();
            if(b+c>a){
                $((div)).addClass((cssname));
            }
        }

            $(window).scroll(function(){
                    // baby动画
                    gdjz(".model",'baby_move',0);
                    // baby动画完

                    // park动画
                    gdjz(".park_a",'baby_move',0);
                    // park动画完

                    // create_con动画
                    gdjz(".createA",'baby_move',0);
                    // create_con动画完

                    // create_con图片动画
                    gdjz(".create_con img:nth-of-type(1)",'baby_move',0);
                    gdjz(".create_con img:nth-of-type(2)",'baby_move',0);
                    gdjz(".create_con img:nth-of-type(3)",'baby_move',-20);
                    // create_con图片动画完

                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                }
            );

    }
    componentDidUpdate(){
        if (document.addEventListener) {

            document.addEventListener('scroll', this.bodyScroll1,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll1);
        }
    }
    componentDidMount(){
        $.ajax({
            url:'http://192.168.43.5:8005/model',
            type:'get',
            success:function(b){
                console.log(b);
                this.setState({model:b});
            }.bind(this)
        });

        $.ajax({
            url:'http://192.168.43.5:8005/baby_park',
            type:'get',
            success:function(b){
                console.log(b);
                this.setState({park:b});
            }.bind(this)
        });


        $.ajax({
            url:'http://192.168.43.5:8005/baby_create',
            type:'get',
            success:function(b){
                console.log(b);
                this.setState({create_con:b});
            }.bind(this)
        });
         // 获取图片
        //banner
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner4/banner4",
            success: function (e) {
                console.log(e)
                this.setState({banner:[e[0].src]});
            }.bind(this)
        });
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/baby_img/baby_img",
            success: function (e) {
                console.log(e)
                this.setState({create_img:e});
            }.bind(this)
        });
        // park背景
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/parkBg/parkBg",
            success: function (e) {
                console.log(e)
                this.setState({parkBg:[e[0].src]});
            }.bind(this)
        });

    }
    render(){
        return(
            <div>
                {/*PC*/}
            <div className="wrapD">
                {/*banner start*/}
                <img src={this.state.banner} alt="" className="bannerD"/>
                {/*banner end*/}
                {/*baby start*/}
                <div className="baby">
                    <div className="box">
                        <div className="model">
                            {this.state.model.map(function (con,i) {
                                return <p key={i}>{con.txt}</p>
                            })}
                            <Link to="/forward"><input type="button" value={this.state.btn.btn}/></Link>
                        </div>
                    </div>
                </div>
                {/*baby end*/}
                {/*park start*/}
                <div className="park">
                    <img src={this.state.parkBg} alt="" className="bannerD"/>
                    <div className="park_a">
                        {this.state.park.map(function (con,i) {
                            return <p key={i}>{con.txt}</p>
                        })}
                        <Link to="/forward"><input type="button" value={this.state.btn.btn}/></Link>
                    </div>
                </div>
                {/*park end*/}
                {/*create start*/}
                <div className="create">
                    <div className="box">
                        <div className="create_con">
                            {this.state.create_con.map(function (con,i) {
                                return <p className="createA" key={i}>{con.txt}</p>
                            })}
                            {this.state.create_img.map(function (img,i) {
                                return <img src={img.src} alt="" key={i}/>
                            })}
                        </div>
                    </div>
                </div>
                {/*create end*/}
            </div>
                {/*PC完*/}
                {/*移动端*/}
                <div className="babyWrap">
                    {/*亲子主题乐园 start*/}
                    <div className="babyP">
                        <h2>亲子主题乐园</h2>
                        <img src="../img/baby-a.jpg" alt=""/>
                        <p>科学教育，均衡发展，为孩子提供一个健康快乐的成长环境，树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。</p>
                        <div className="lineP"></div>
                    </div>
                    {/*亲子主题乐园 end*/}
                    {/*乐享艺术课程 start*/}
                    <div className="babyP">
                        <h2>乐享艺术课程</h2>
                        <img src="../img/baby-c.jpg" alt=""/>
                        <p>没有什么能比艺术更能全面激发孩子创造力和想象力了！爱乐创意美术课程，绝不仅仅是让孩子在老师的指导下完成一件简单的手工作品，而是通过游戏的方式，给孩子提供自己动手的平台，以音乐为媒介，以艺术为手段，全面激发孩子的好奇心、创新精神和自我内心表达的能力。在我们的课堂里，孩子们自己动手，不断探索，感受七彩多变的艺术世界，通过绘画、雕塑、素描、拼贴画、歌唱、角色扮演等不同的艺术表现方式以及富于想象的适龄活动，帮助孩子们激发无限的创想力，帮助家长了解孩子们的内心世界。</p>
                        <div className="lineP"></div>
                    </div>
                    {/*乐享艺术课程 end*/}

                </div>
                {/*移动端完*/}
            </div>
        )
    }
}
export default Baby;