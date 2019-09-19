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
                <img src={logoIcon} className="logoIcon" alt="logoIcon" />
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

            <div className="content">
                 <div className='title'>自我简介</div>
                 <p>chris：</p>
                 <p>前端卑微小陈，自小刻苦聪慧，年少长，入苏大计院，得修大道</p>
                 <p></p>
            </div>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
