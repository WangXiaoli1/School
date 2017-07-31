/**
 * Created by Administrator on 2017/7/27.
 */
import React, { Component } from 'react';
import rem from './rem'
class Home extends Component{
    render(){
        return <div className="homeWrapP">
            {/*banner*/}
            <div className="bannerP">
                <img src="../img/bC.jpg" alt=""/>
                <img src="../img/bD.jpg" alt=""/>
            </div>
            {/*学校环境*/}
            {/*<div className="envirenment">*/}
                {/*<h2>学校环境</h2>*/}
            {/*</div>*/}
            <div className="specialP">
                <div>特色活动</div>
                <div>描绘世界</div>
                <div>亲子乐园</div>
                <div>最新资讯</div>
            </div>
            <div className="myClassP_A">
                <h2>特色课程</h2>
                <h3>LEARNING INTEREST</h3>
                <div>
                    <img src="../img/girlP" alt=""/>
                    <p></p>
                </div>
            </div>
        </div>
    }
}
export default Home;