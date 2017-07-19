/**
 * Created by Administrator on 2017/7/17.
 */
import React, { Component } from 'react';
class ConB extends Component {
    constructor () {
        super();
        this.data = {
            "banner":{"img":"img/bA.jpg"},
            "environment": {
                "title": "学校环境",
                "enTitle":"LEARNING INTEREST",
                "leftA":"作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、秉承最适合儿童成长的教育理念，同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。",
                "leftB":"每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。",
                "leftC":"同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍。充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境",
                "rightA":"每个校园都是按照国际纯正蒙台梭利校园的特点和标准精心设计的，充满着温馨关爱的教育氛，打造了最适合孩子健康成长的校园环境。儿童教育，其实不只是大人如何教育孩子，也是孩子如何教育大人，让大人成为更加完善的人，更加领悟生活真谛的人。"
            },
            "picture":[
                {"img":"../img/student-a.jpg"},
                {"img":"../img/pic-e.jpg"},
                {"img":"../img/pic-f.jpg"},
                {"img":"../img/student-b.jpg"}
            ],
            "introduce":{
                "img":"img/teacher.png",
                "title":"为孩子的未来撑起一片天空！",
                "enTitleA":"儿童教育，其实不只是大人如何教育孩子，也是孩子如何教育大人，让大人成为更加完",
                "enTitleB":"善的人，更加领悟生活真谛的人。",
                "conA":"作为中外知名的双语学前教育机构，引进一流的教育管理模式、融合国内外先进的教研成果、秉承最适合儿童成长的教育理念，",
                "conB":"同时，吸纳了经过百年验证的蒙台梭利教育精髓，拥有国际一流的教育专家团队和具有国际资格认证的中外教师队伍，打造了最适合孩子健康成长的校",
                "conC":"园环境。经过十年的积累与沉淀，目前伊顿已经发展成为引领中国幼教国际化发展的旗舰。",
                "btn":"我要预约"

            }
        }
    }
    componentDidMount=function () {
        var picture=document.getElementById('picture');
        var picDiv=picture.getElementsByTagName('div');
        var picSpan=picture.getElementsByTagName('span');

        for (var i=0;i<picDiv.length;i++){
            picDiv[i].style.backgroundImage=`url("${this.data.picture[i].img}")`;
            picDiv[i].onmouseover=function () {
                this.children[0].style.bottom='0px'
            }
            picDiv[i].onmouseout=function () {
                this.children[0].style.bottom='-5px'
            }
        }
    }
    render() {
        return (
            // 园所概况
            <div className="wrapB">
                <img src={this.data.banner.img} alt="" className="bannerB"/>
                <div className="super-conB">
                    {/*environment*/}
                    <div className="environment">
                        <h2>{this.data.environment.title}</h2>
                        <h3>{this.data.environment.enTitle}</h3>
                        <div className="environment-left">
                            <p>{this.data.environment.leftA}</p>
                            <p>{this.data.environment.leftB}</p>
                            <p>{this.data.environment.leftC}</p>
                        </div>
                        <p>{this.data.environment.rightA}</p>
                    </div>
                    {/*picture*/}
                    <div className="picture" id="picture">
                        <div><span></span></div>
                        <div><span></span></div>
                        <div><span></span></div>
                        <div><span></span></div>
                    </div>
                    {/*introduce*/}
                    <div className="introduce">
                        <img src={this.data.introduce.img} alt=""/>
                        <h2>{this.data.introduce.title}</h2>
                        <h3>{this.data.introduce.enTitleA}</h3>
                        <h3>{this.data.introduce.enTitleB}</h3>
                        <b></b>
                        <p>{this.data.introduce.conA}</p>
                        <p>{this.data.introduce.conB}</p>
                        <p>{this.data.introduce.conC}</p>
                        <button>{this.data.introduce.btn}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConB;