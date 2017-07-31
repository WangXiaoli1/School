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
    componentDidMount(){
        if (window.addEventListener) {
            document.addEventListener('scroll', this.bodyScroll,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll);
        }
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
        )
    }
}
export default Baby;
