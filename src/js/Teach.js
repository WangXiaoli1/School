
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
    componentDidMount(){
        if (window.addEventListener) {
            document.addEventListener('scroll', this.bodyScroll,false);
        } else {
            document.attachEvent('onscroll', this.bodyScroll);
        }
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
        )
    }
}
export default Teach;