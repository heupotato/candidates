import React, { Component } from 'react';
import Hieu from './Hieu.jpg'
import Loan from './Loan.jpg'
import Thong from './Thong.jpg'
import Phuc from './images/102180268.jpg'

class Contact extends Component {
    render() {
        return ( 
            <div className="container">   
                <table className = "table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Họ và tên</th>
                                <th>Liên lạc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th width={200}> 
                                    <img src = {Hieu} width={200} height={200}></img>
                                </th>
                                <th>
                                    Lê Thị Lưu Hiếu
                                </th>
                                <th>
                                    <p>
                                        Lớp: 18TCLC_NHAT <br/>
                                        Nhóm: 18N16B <br/>
                                        Email: lethiluuhieu@gmail.com
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <th width={200}> 
                                    <img src = {Loan} width={200} height={220}></img>
                                </th>
                                <th>
                                    Thái Thị Thu Loan
                                </th>
                                <th>
                                    <p>
                                        Lớp: 18TCLC_NHAT <br/>
                                        Nhóm: 18N16A <br/>
                                        Email: thloanth.dut@gmail.com
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <th width={200}> 
                                    <img src = {Phuc} width={200} height={200}></img>
                                </th>
                                <th>
                                    Trần Xuân Phúc
                                </th>
                                <th>
                                    <p>
                                        Lớp: 18TCLC_NHAT <br/>
                                        Nhóm: 18N16A <br/>
                                        Email: txp.hbc@gmail.com
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <th width={200}> 
                                    <img src = {Thong} width={200} height={200}></img>
                                </th>
                                <th>
                                    Nguyễn Đăng Thông
                                </th>
                                <th>
                                    <p>
                                        Lớp: 18TCLC_NHAT <br/>
                                        Nhóm: 18N16B <br/>
                                        Email: thongnd69@gmail.com
                                    </p>
                                </th>
                            </tr>
                        </tbody>
                    </table>          
            </div>
        );
    }
}

export default Contact;
