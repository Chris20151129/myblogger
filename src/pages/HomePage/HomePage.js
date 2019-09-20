import React from 'react';
import { Carousel } from 'antd';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input, Button, Icon, message } from "antd";

import 'antd/dist/antd.css';
import './HomePage.css';

// import logo from '../../images/logo.svg';
// import background from '../../images/background.png';
// import background1 from '../../images/background1.png';
const logoIcon = require('../../images/logoIcon.png'),
    background = require('../../images/background.png'),
    background1 = require('../../images/background1.png'),
    background2 = require('../../images/background2.jpg'),
    background3 = require('../../images/background3.jpg'),
    logo = require('../../images/logo.svg');

function App() {
    return (
        <div className="App">
            <header className="header">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logoIcon} className="logoIcon" alt="logoIcon" />
                </div>

                <div className="nav-list">
                    <a href="#" className="nav-list-a" >首页</a>
                    <a href="#home" className="nav-list-a" >产品</a>
                    <a href="#home" className="nav-list-a" >生活</a>
                    <a href="#home" className="nav-list-a" >合作</a>
                </div>
            </header>
            <Carousel autoplay>
                <div><img src={background} className="backgroundIcon" alt="backgroundIcon" /></div>
                <div><img src={background1} className="backgroundIcon" alt="backgroundIcon" /></div>
                <div><img src={background2} className="backgroundIcon" alt="backgroundIcon" /></div>
                <div><img src={background3} className="backgroundIcon" alt="backgroundIcon" /></div>
            </Carousel>

            <div className="container">
                <div className="container-left">

                </div>
                <div className="container-right">
                    <div className="CS-box">
                        <div>Chris</div>
                    </div>
                </div>
            </div>



            <div className="content">
                <div className='title'>自我简介</div>
                <div className="letterName">chris：</div>
                <p>前端卑微小陈，自小刻苦聪慧，年少长，入苏大计院，得修大道。某日，师问曰：吾有大道三千，汝欲何求？陈答曰：吾欲修快乐之道</p>
                <p>师曰：吾有C#入门到精通秘籍一本，可学否？</p>
                <p>陈摇头：依赖性强，未能跨平台，不开源，不学</p>
                <p>师曰：吾有java入门到精通秘籍一本，可学否？</p>
                <p>陈摇头：编译启动慢，占用内存，入门繁琐，不学</p>
                <p>师怒，持戒尺打头三下，随后回房关门</p>
                <p>陈拂头，顿悟，欢欢喜喜待三更天入师门，拱手问曰：师唤吾深夜而来何为</p>
                <p>师笑曰：汝实聪慧，吾有前端绝技几门，此乃屠龙之术，学否？</p>
                <p>陈连连点头：学学学</p>
                <p>遂，陈以师所传之<span>html</span>，<span>css</span>，<span>js</span>三门绝技入门，后步入江湖，得奇遇，习得<span>angularJS</span>上篇，后改换门派，弃之，
                     转修<span>react</span>，<span>react-native</span>，主攻app。岁余，得见小程序，心向往之，亦学之。然人之愈长，愈觉自身之渺小，勿敢停。
                     因与后端对接之麻烦，自学<span>nodejs</span>，购阿里云以配之。得此神器，吾觉之人山人海，想寻些有缘人，遂以博客记之。
                </p>
            </div>

            <div className="footer">
                <div>Chris</div>
                <div>联系电话：</div>
                <div>联系邮箱：chris2905@foxmail.com</div>
            </div>
        </div>
    );
}

export default App;
