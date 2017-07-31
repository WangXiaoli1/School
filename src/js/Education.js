/**
 * Created by Administrator on 2017/7/18.
 */
import React,{Component} from 'react';
import  $ from 'jquery';
class Education extends Component{
    constructor(){
        super();
        this.state = {
            class:[],
            myClass:[],
            xhrGreenR:[],
            xhrGreen:[],
            xhrGreenRight:[],
            pictureCLeft:[],
            pictureCRight:[],
    }
    }
    componentDidMount(){
        // var pictureCLeft=document.getElementById('pictureCLeft');
        // var pictureCRight=document.getElementById('pictureCRight');
        // for(var i=0;i<pictureCLeft.children.length;i++){
        //     pictureCLeft.children[i].style.backgroundImage=`url("${this.state.pictureCLeft[i].img}")`
        // }
        // pictureCRight.style.backgroundImage=`url("${this.state.pictureCRight.img}")`;

        $.ajax({
            url:'http://192.168.43.5:8005/edu_class',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({class:a});
            }.bind(this)
        });
        $.ajax({
            url:'http://192.168.43.5:8005/edu_myClass',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({myClass:a});
            }.bind(this)
        });
        $.ajax({
            url:'http://192.168.43.5:8005/edu_xhrGreen',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({xhrGreenR:a});
            }.bind(this)
        });
        $.ajax({
            url:'http://192.168.43.5:8005/edu_xhrGreenRight',
            type:'get',
            success:function(a){
                console.log(a);
                this.setState({xhrGreenRight:a});
            }.bind(this)
        });

// 获取图片
//         banner
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner3/banner3",
            success: function (e) {
                this.setState({banner3:[e[0].src]});
            }.bind(this)
        });
        // myClass
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/e_myclass/e_myclass",
            success: function (e) {
                console.log(e)
                this.setState({myClass:e});
            }.bind(this)
        });
        // xhrGreen
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/e_xhr/e_xhr",
            success: function (e) {
                this.setState({xhrGreen:e});
            }.bind(this)
        });
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/edu_pic/edu_pic",
            success: function (e) {
                this.setState({pictureCLeft:e});
            }.bind(this)
        });
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/edu_pic1/edu_pic1",
            success: function (e) {
                this.setState({pictureCRight:[e[0].src]});
            }.bind(this)
        });
        // function moveY(id,t) {
        //     var obj=document.getElementById(id);
        //     var timer='';
        //     var screenW=document.documentElement.offsetWidth;
        //     obj.parentNode.style.overflow='hidden';
        //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //     timer=setInterval(function () {
        //         obj.style.transition=t+"s";
        //         obj.style.transform="translateY("+0+")";
        //     },500)
        // }
        // moveY(id,t)
    }
    render(){
        return(
            <div className="wrapC">
                <img src={this.state.banner3} alt="" className="bannerC"/>
                <div className="super-class">
                    <div className="class">
                        {this.state.class.map(function (v,i) {
                            return <p key={i} className="classIn">{v.text}</p>
                        })}
                        <div className="myClass">
                            {this.state.myClass.map(function (v,i) {
                                return <div key={i}>
                                    <span className="myClassA"><img src={v.src} alt="" className="myClassB"/></span>
                                    <div className="myClassCon">
                                        <h3>{v.title}</h3>
                                        <h4>{v.enTitle}</h4>
                                        <p>{v.con}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    {/*xhrGreen*/}
                    <div className="super-xhrGreen">
                        <div className="xhrGreen">
                            {this.state.xhrGreenR.map(function (v,i) {
                                return <img src={v.src} alt="" className="xhr" key={i}/>
                            })}
                            <div className="xhrGreen-right">
                                {this.state.xhrGreenRight.map(function (v,i) {
                                    return <p key={i}>{v.text}</p>
                                })}
                                {this.state.xhrGreen.map(function (v,i) {
                                    return <a key={i}>{v.text}</a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="pictureC">
                        <div className="pictureC-left" id="pictureCLeft">
                            {this.state.pictureCLeft.map(function (v,i) {
                                return <div key={i}><img src={v.src} alt=""/></div>
                            }
                            )}
                        </div>
                        <div className="pictureC-right" id="pictureCRight">
                            <img src={this.state.pictureCRight} alt=""/>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}
export default Education;