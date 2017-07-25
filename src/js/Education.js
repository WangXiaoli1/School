/**
 * Created by Administrator on 2017/7/18.
 */
import React,{Component} from 'react';
import  $ from 'jquery';
class Education extends Component{
    constructor(){
        super();
        this.state = {
            "banner":"img/banner-a.jpg",
            class:[],
            myClass:[],
            // "myClass":[
            //     {"img":"img/icon-e.png","title":"国际班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
            //     {"img":"img/icon-f.png","title":"科普班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
            //     {"img":"img/icon-g.png","title":"手绘班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
            //     {"img":"img/icon-h.png","title":"品德班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"}
            // ],
            xhrGreen:[],
            // "xhrGreen":{"img":"img/xhr-b.png","text":"我要报名>>"},
            xhrGreenRight:[],
            "pictureCLeft":[
                {"img":"../img/pic-a.jpg"},
                {"img":"../img/pic-b.jpg"},
                {"img":"../img/pic-d.jpg"},
                {"img":"../img/pic-e.jpg"}
            ],
            "pictureCRight":{"img":"../img/pic-c.jpg"}


    }
    }
    componentDidMount(){
        var pictureCLeft=document.getElementById('pictureCLeft');
        var pictureCRight=document.getElementById('pictureCRight');
        for(var i=0;i<pictureCLeft.children.length;i++){
            pictureCLeft.children[i].style.backgroundImage=`url("${this.state.pictureCLeft[i].img}")`
        }
        pictureCRight.style.backgroundImage=`url("${this.state.pictureCRight.img}")`;

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
                this.setState({xhrGreen:a});
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
                <img src={this.state.banner} alt="" className="bannerC"/>
                <div className="super-class">
                    <div className="class">
                        {this.state.class.map(function (v,i) {
                            return <p key={i}>{v.text}</p>
                        })}
                        <div className="myClass">
                            {this.state.myClass.map(function (v,i) {
                                return <div key={i}>
                                    <span><img src={v.img} alt=""/></span>
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
                            {this.state.xhrGreen.map(function (v,i) {
                                return <img src={v.img} alt="" className="xhr" key={i}/>
                            })}
                            {/*<img src={this.state.xhrGreen.img} alt="" className="xhr"/>*/}
                            <div className="xhrGreen-right">
                                {this.state.xhrGreenRight.map(function (v,i) {
                                    return <p key={i}>{v.text}</p>
                                })}
                                {this.state.xhrGreen.map(function (v,i) {
                                    return <a key={i}>{v.text}</a>
                                })}
                                {/*<a>{this.state.xhrGreen.text}</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="pictureC">
                        <div className="pictureC-left" id="pictureCLeft">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="pictureC-right" id="pictureCRight"></div>
                    </div>
                </div>
             </div>
        )
    }
}
export default Education;