
import React,{Component} from 'react';
import $ from 'jquery';
class Teach extends Component{
    constructor(){
        super();
        this.state={
            banner5:[],
            brand:[],
            leaderOne:[],
            leader_one_l:[],
            leaderTwo:[],
            leader_two_r:[],
            leaderThree:[],
            leader_three_l:[],
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
        $(document).ready(function() {
            $(window).scroll(function(){
                    // brand字动画
                    gdjz(".brand",'teach_move',300);
                    // brand字动画完

                    // leader_one动画
                    // 框
                    gdjz(".leader_one_l",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_one_l img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_one_r",'teach_move',300);
                    // 字完
                    // leader_one动画完

                    // leader_two动画
                    // 框
                    gdjz(".leader_two_r",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_two_r img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_two_l",'teach_move',300);
                    // 字完
                    // leader_two动画完

                    // leader_three动画
                    // 框
                    gdjz(".leader_three_l",'teach_move',300);
                    // 框完
                    // 图
                    gdjz(".leader_three_l img",'teach_move',300);
                    // 图完
                    // 字
                    gdjz(".leader_three_r",'teach_move',300);
                    // 字完
                    // leader_three动画完


                    // footer动画
                    gdjz(".footerIn",'moveFooter',300);
                    // footer动画完
                }
            );
        });
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
            url: 'http://192.168.43.5:8005/teach_brand',
            type: 'get',
            success: function (a) {
                console.log(a);
                this.setState({brand: a});
            }.bind(this)
        });

        $.ajax({
            url: 'http://192.168.43.5:8005/teach_leaderOne',
            type: 'get',
            success: function (a) {
                console.log(a);
                this.setState({leaderOne: a});
            }.bind(this)
        });
        $.ajax({
            url: 'http://192.168.43.5:8005/teach_leaderTwo',
            type: 'get',
            success: function (a) {
                console.log(a);
                this.setState({leaderTwo: a});
            }.bind(this)
        });
        $.ajax({
            url: 'http://192.168.43.5:8005/teach_leaderThree',
            type: 'get',
            success: function (a) {
                console.log(a);
                this.setState({leaderThree: a});
            }.bind(this)
        });


        //调取图片
        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/banner5/banner5",
            success: function (e) {
                this.setState({banner5:[e[0].src]});
            }.bind(this)
        });



        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/tea_leaderOne/tea_leaderOne",
            success: function (e) {
                this.setState({leader_one_l:[e[0].src]});
            }.bind(this)
        });


        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/tea_leaderTwo/tea_leaderTwo",
            success: function (e) {
                this.setState({leader_two_r:[e[0].src]});
            }.bind(this)
        });

        $.ajax({
            type: "get",
            url: "http://192.168.43.5:8005/tea_leaderThree/tea_leaderThree",
            success: function (e) {
                this.setState({leader_three_l:[e[0].src]});
            }.bind(this)
        });

    }







    render(){
        return(
            <div>
                {/*pc*/}
            <div className="wrapE">
                {/*banner start*/}
                <div className="bannerE">
                    <img src={this.state.banner5} alt=""/>
                </div>
                {/*banner end*/}
                <div className="teacher">
                    <div className="box">
                        <div className="teacher_div">
                            {/*brand start*/}
                              <div className="brand">
                                  {this.state.brand.map(function (con,i) {
                                      return <p key={i}>{con.txt}</p>
                                  })}
                              </div>
                            {/*brand end*/}
                            {/*leader start*/}
                                <div className="leader">

                                    <div className="leader_one_l">
                                        <img src={this.state.leader_one_l} alt=""/>
                                    </div>
                                        {this.state.leaderOne.map(function (con,i) {
                                            return <div key={i} className="leader_one_r">
                                                <h4>{con.txt1}</h4>
                                                <h4>{con.txt2}</h4>
                                                <p className="line"></p>
                                                <h4>{con.txt3}</h4>
                                            </div>
                                        })}
                                    <div className="clear"></div>


                                    {this.state.leaderTwo.map(function (con,i) {
                                        return <div key={i} className="leader_two_l">
                                            <h4>{con.txt1}</h4>
                                            <h4>{con.txt2}</h4>
                                            <p className="line"></p>
                                            <h4>{con.txt3}</h4>
                                        </div>
                                    })}

                                    <div className="leader_two_r">
                                        <img src={this.state.leader_two_r} alt=""/>
                                    </div>
                                    <div className="clear"></div>


                                    <div className="leader_three_l">
                                        <img src={this.state.leader_three_l} alt=""/>
                                    </div>

                                    {this.state.leaderThree.map(function (con,i) {
                                        return <div key={i} className="leader_three_r">
                                            <h4>{con.txt1}</h4>
                                            <h4>{con.txt2}</h4>
                                            <p className="line"></p>
                                            <h4>{con.txt3}</h4>
                                        </div>
                                    })}
                                    <div className="clear"></div>

                                </div>
                            {/*leader end*/}
                        </div>
                    </div>
                </div>
            </div>
                {/*pc完*/}
                {/*移动端*/}
                <div className="teacherWrap">
                    {/*业务园长  start*/}
                    <div className="teacherP">
                        <h2>业务园长</h2>
                        <span>张莹 / ZHANGYING</span>
                        <img src="../img/teacher-a.jpg" alt=""/>
                        <p>应用全新的教育理念，以儿童为中心，运用新颖的教具，多元情景模式教学，多方面能力训练，大容量的认知，培养幼儿的观察力、认知力、辨别力、想象力、锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。</p>
                        <div className="lineP"></div>
                    </div>
                    {/*业务园长  end*/}
                    {/*副园长  start*/}
                    <div className="teacherP">
                        <h2>副园长</h2>
                        <span>杨晓英 / ZHANGYING</span>
                        <img src="../img/teacher-b.jpg" alt=""/>
                        <p>应用全新的教育理念，以儿童为中心，运用新颖的教具，多元情景模式教学，多方面能力训练，大容量的认知，培养幼儿的观察力、认知力、辨别力、想象力、锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。</p>
                        <div className="lineP"></div>
                    </div>
                    {/*副园长  end*/}
                    {/*教育主任  start*/}
                    <div className="teacherP">
                        <h2>教育主任</h2>
                        <span>李向丽 / ZHANGYING</span>
                        <img src="../img/teacher-c.jpg" alt=""/>
                        <p>应用全新的教育理念，以儿童为中心，运用新颖的教具，多元情景模式教学，多方面能力训练，大容量的认知，培养幼儿的观察力、认知力、辨别力、想象力、锻炼孩子的细心和耐心。树立幼教品牌，打造威海一流优质园，省级示范园，民办教育的窗口。</p>
                        <div className="lineP"></div>
                    </div>
                    {/*教育主任  end*/}
                </div>

                {/*移动端完*/}
            </div>
        )
    }
}
export default Teach;