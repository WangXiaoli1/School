/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';

class Forward extends Component{
    componentDidMount=function () {
        var name=document.getElementById('name');
        var phone=document.getElementById('phone');
        var Email=document.getElementById('Email');
        var message=document.getElementById('message');

        name.onblur=function(){
            var reg=/^[\u4e00-\u9fa5]{2,4}$/;
            if(!reg.test(name.value)){
                name.value=''
                name.placeholder='请输入正确的姓名';
            }
        };
        phone.onblur=function(){
            var reg=/^1[34578][0-9]{9}$/;
            if(!reg.test(phone.value)){
                phone.value='';
                phone.placeholder='输的手机号码格式错误';
            }
        }
        Email.onblur=function(){
            var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if(!reg.test(Email.value)){
                Email.value='';
                Email.placeholder='输的Email格式错误';
            }
        }

        // 验证码
        // var React = require('react');
        // var AMR = require('amazeui-react');
        // var Input = AMR.Input;
        //
        // var Captcha = React.createClass({
        //     propTypes: {
        //         bgImage: React.PropTypes.string,
        //         size: React.PropTypes.number,
        //         captchaType: React.PropTypes.oneOf(['Calculation', 'Normal']),
        //         color: React.PropTypes.string
        //     }
        // })
        var code;
        function createCode() {
            code = "";
            var codeLength = 4; //验证码的长度
            var checkCode = document.getElementById("checkCode");
            var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
            for (var i = 0; i < codeLength; i++){
                var charNum = Math.floor(Math.random() * 52);
                code += codeChars[charNum];
            }
            if (checkCode){
                checkCode.className = "code";
                checkCode.innerHTML = code;
            }
        }
        function validateCode() {
            var inputCode = document.getElementById("inputCode").value;
            if (inputCode.length <= 0){
                alert("请输入验证码！");
            }
            else if (inputCode.toUpperCase() != code.toUpperCase()){
                alert("验证码输入有误！");
                createCode();
            }
            else{
                alert("验证码正确！");
            }
        }


    };
    render(){
        return(
            <div className="wrapF" onload="createCode()">
                <img src="img/bA.jpg" alt="" className="bannerF"/>
                <div className="super-myMain">
                    <div className="myMain">
                         <h2>姓名 <span>Name</span></h2>
                         <p><input type="text" id="name"/><span>*</span></p>
                         <h2>电话 <span>Phone</span></h2>
                         <p><input type="text" id="phone"/><span>*</span></p>
                         <h2>邮箱 <span>Mail</span></h2>
                         <p><input type="text" id="Email"/><span>*</span></p>
                         <h2>信息 <span>Information</span></h2>
                         <p><textarea id="message"></textarea></p>
                         <h2>验证码</h2>
                         {/*<div><input type="text"/><img src="../img/validateCode.jpg"/><b>换一张</b><span>*</span></div>*/}
                   {/*<button>提交</button>*/}
                   //
                   //       <form id="form1" runat="server" onsubmit="validateCode()">
                   //            <div>
                   //                <table border="0" cellspacing="5" cellpadding="5" >
                                    {/*<tr>*/}
                                        {/*<td></td><td> <div class="code" id="checkCode" onclick="createCode()" ></div></td>*/}
                                        {/*<td><a  href="#" onclick="createCode()">看不清换一张</a></td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>验证码：</td><td><input  style="float:left;" type="text"   id="inputCode" /></td><td>请输入验证码</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr><td></td><td><input id="Button1"  onclick="validateCode();" type="button" value="确定" /></td><td></td>*/}
                                    {/*</tr>*/}
                                {/*</table>*/}
                            {/*</div>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default Forward;