import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about" >
                <h1>Hệ thống so khớp khuôn mặt chống thi hộ</h1>
                <h3>Phát triển bởi nhóm 03 - 18N16</h3>
                <h2>Hướng dẫn sử dụng hệ thống</h2>
                <button className="button disabled">1</button>
                <h2 className="rule">Sau khi hệ thống khởi động, để camera quét mặt và so khớp khuôn mặt</h2>
                <button className="button disabled">2</button>
                <h2 className="rule">Theo dõi kết quả tại trang web, tại các tab hiển thị trạng thái phòng thi</h2>
                <button className="button disabled">3</button>
                <h2 className="rule">Nếu có sinh viên bị nghi vấn, sẽ hiển thị cảnh báo</h2>
            </div>
        );
    }
}

export default About;