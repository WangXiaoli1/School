/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import $ from 'jquery';

class Forward extends Component{
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
        // footer动画
        $(document).ready(function() {
            $(window).scroll(function(){
                    gdjz(".footerIn",'moveFooter',300);
                }
            );
        });
        // footer动画完
    }
    componentDidUpdate(){
        if (document.addEventListener) {

            document.addEventListener('scroll', this.bodyScroll1,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll1);
        }
    }
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
        var yan=document.getElementById('yan');
        var change=document.getElementById('change');
        var txt=document.getElementById('txt');
        /**生成字母数组**/
        // function getAllLetter() {
            var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9";
            var letterString=letterStr.split(",");
        // }
        /**生成一个随机数**/
        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        /**生成一个随机色**/
        function randomColor(min, max) {
            var r = randomNum(min, max);
            var g = randomNum(min, max);
            var b = randomNum(min, max);
            return "rgba(" + r + "," + g + "," + b +","+0.4+ ")";
        }
        for(var i=0;i<4;i++){
            yan.innerHTML+=letterString[randomNum(0, 62)]
        }
        change.onclick=function () {
            yan.style.backgroundColor=randomColor(0, 255);
            yan.innerHTML='';
            for(var i=0;i<4;i++){
                yan.innerHTML+=letterString[randomNum(0, 62)]
            }
            return yan.innerHTML
        }
        yan.onclick=function () {
            yan.style.backgroundColor=randomColor(0, 255);
            yan.innerHTML='';
            for(var i=0;i<4;i++){
                yan.innerHTML+=letterString[randomNum(0, 62)]
            }
            return yan.innerHTML
        }
        txt.onblur=function () {
            if(txt.value!=yan.innerHTML){
                alert("验证码不正确")
            }else{

            }
        }


    };
    render(){
        return(
            <div className="wrapF">
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
                        <div>
                            <input type="text" id="txt"/>
                            <b id="yan"></b>
                            <p id="change">换一换</p>
                            <span>*</span>
                        </div>
                        <button>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forward;