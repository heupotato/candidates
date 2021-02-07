import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Logo from '../logo.svg'
import DUT from '../logodut.jpg'
import ITF from '../itf.jpg'
const menus = [
    {
        name : 'Trang chủ',
        to : '/',
        exact : true
    },
    {
        name : 'Giới thiệu',
        to : '/about',
        exact : false
    },
    {
        name : 'Liên hệ',
        to : '/contact',
        exact : false
    },
    {
        name : 'Thí sinh vắng mặt',
        to : '/absent-candidates',
        exact : false
    },
    {
        name: 'Thí sinh có mặt', 
        to: '/appeared', 
        exact: false
    },
    {
        name: 'Nghi vấn', 
        to : '/suspicious', 
        exact: false
    }
];

//Custom Link
const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link  to={to} className="my-link"><b>{label}</b></Link>
                    </li>
                   
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <div>
            <div className="page-header bg-dark">
                <img className="logoleft" src={DUT}></img>
                <img className="logoright" src = {ITF}></img>
                <h1>HỆ THỐNG SO KHỚP KHUÔN MẶT CHỐNG THI HỘ</h1>
            </div>
            <nav className="navbar navbar-default ">
                <ul className="nav navbar-nav">
                    { this.showMenus(menus)}
                </ul>
            </nav>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}
export default Menu;