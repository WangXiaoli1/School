/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
class Forward extends Component{
    render(){
        return(
            <div className="wrapF">
                <img src="img/bA.jpg" alt="" className="bannerF"/>
                <div className="super-myMain">
                    <div className="myMain">
                         <h2>姓名 <span>Name</span></h2>
                         <p><input type="text"/><span>*</span></p>
                         <h2>电话 <span>Phone</span></h2>
                         <p><input type="text"/><span>*</span></p>
                         <h2>邮箱 <span>Mail</span></h2>
                         <p><input type="text"/><span>*</span></p>
                         <h2>信息 <span>Information</span></h2>
                         <p><textarea></textarea></p>
                         <h2>验证码</h2>
                         <div><input type="text"/><img src="../img/validateCode.jpg"/><b>换一张</b><span>*</span></div>
                   <button>提交</button>

                    </div>
                </div>
            </div>
        )
    }
}
export default Forward;