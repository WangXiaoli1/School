/**
 * Created by Administrator on 2017/7/18.
 */
import React,{Component} from 'react';
class Education extends Component{
    constructor(){
        super();
        this.data = {
            "banner":"img/banner-a.jpg",
            "class":[
                {"text":"引进一流的教育管理模式"},
                {"text":"EDUCATIONAL MANAGEMENT MODEL"},
                {"text":"专注于激发孩子们学习兴趣、食品认知能力、动手能力、我们坚信，伊顿的孩子会拥有这样的核心价值——多元文"},
                {"text":"化的情商和胸怀化的情商和胸怀、优良的品格和超凡的创造力！"}
            ],
            "myClass":[
                {"img":"img/icon-e.png","title":"国际班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
                {"img":"img/icon-f.png","title":"科普班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
                {"img":"img/icon-g.png","title":"手绘班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"},
                {"img":"img/icon-h.png","title":"品德班级","enTitle":"LEARNING INTEREST","con":"拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。"}
            ],
            "xhrGreen":{"img":"img/xhr-b.png","text":"我要报名>>"},
            "xhrGreenRight":[
                {"text":"特色教学"},
                {"text":"LEARNING INTEREST"},
                {"text":"为他们发展更好的逻辑思维能力打下基础。伊顿专业的老师和教育专家们将富有创造力的教学主体和教学环境建立在丰富的蒙台梭利材料之上，每个月变换不同的主题，全年不间断。"}
            ],
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
            pictureCLeft.children[i].style.backgroundImage=`url("${this.data.pictureCLeft[i].img}")`
        }
        pictureCRight.style.backgroundImage=`url("${this.data.pictureCRight.img}")`;

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
                <img src={this.data.banner} alt="" className="bannerC"/>
                <div className="super-class">
                    <div className="class">
                        {this.data.class.map(function (v) {
                            return <p>{v.text}</p>
                        })}
                        <div className="myClass">
                            {this.data.myClass.map(function (v,i) {
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
                            <img src={this.data.xhrGreen.img} alt="" className="xhr"/>
                            <div className="xhrGreen-right">
                                {this.data.xhrGreenRight.map(function (v) {
                                    return <p>{v.text}</p>
                                })}
                                <a>{this.data.xhrGreen.text}</a>
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