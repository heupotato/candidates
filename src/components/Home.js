import React, { Component } from 'react';

class Home extends Component {
    redirect = (url) => 
    {
        location.replace('/' + url);  //eslint-disable-line
    }
    render() {
        return (
            <div className = "homepage">
                <h1>Chào mừng đến với hệ thống so khớp khuôn mặt chống thi hộ</h1>
                <h2>Để bắt đầu, bạn có thể xem giới thiệu và hướng dẫn về hệ thống</h2>
                <button className="button button2" onClick = {() => this.redirect("about")}>Giới thiệu</button>
                <h2 style={{marginTop : 40}}>Hoặc bạn có thể sử dụng hệ thống ngay bây giờ </h2>
                <button className="button button1" onClick = {() => this.redirect("absent-candidates")}>Bắt đầu</button>
            </div>
        );
    }
}

export default Home;