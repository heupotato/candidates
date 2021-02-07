import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Product from './product';
import axios from 'axios';
import unnamed from "./unnamed.png"

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidates : [],
            id: '',
            name: '',
            Class: '',
            DoB: '', 
            img: unnamed,
            appear: '', 
            index: 0
        }
    }
    componentDidMount(){
        axios({
            method: 'GET', 
            url: 'https://py3s1-6a115.firebaseio.com/info.json', 
            data: null
        }).then(res => {
            console.log(res); 
            this.setState({
               candidates: res.data 
            });
            //console.log(res.data);
        }).catch(err => {
            console.log(err); 
        });
        setInterval(() => {location.reload()}, 20000);  //eslint-disable-line

    }

    HandleChangeProduct(candidate, index){
        console.log('a');
        this.setState({
            id: candidate.id,
            name: candidate.name,
            img: candidate.img,
            DoB: candidate.DoB,
            Class: candidate.Class, 
            index: index
        })   
       // window.scrollTo(0,document.body.scrollHeight);
        var elm = document.getElementById("details"); 
        elm.scrollIntoView(true);
    }

    render() {
        var candidates = [] ; 
        candidates =  Object.keys(this.state.candidates).map(k => this.state.candidates[k]); 
        console.log(candidates); 
        const {id, name, img, Class, DoB, index} = this.state;
        
       var {match} = this.props; 
       //console.log(match);  
       var count = 0; 
        var result = candidates.map((candidate, index) => {
                if (candidate.suspicious == "true") count++; 
                if (candidate.appear == "false") return(
                <tr key = {index}>
                    <td onClick = {() => this.HandleChangeProduct(candidate, index)}>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.Class}</td>
                    <td>{candidate.DoB}</td>
                </tr>
            ); 
        });
        if (count == 0)
        return (
            <div className="container ">
                <h1>Danh sách sinh viên chưa có mặt tại phòng thi PTEST</h1>    
                <div>
                     <table className = "table table-bordered table-hover">
                        <thead>
                              <tr>
                                <th>ID</th>
                                <th>Tên Sinh Viên</th>
                                <th>Lớp</th>
                                <th>Ngày sinh</th>
                            </tr>
                        </thead>
                        <tbody>
                              {result !== '' ? result : ''}
                        </tbody>
                    </table>             
                </div>
                <div id = "details">
                <Product id={id} name={name} img={img} Class={Class} DoB={DoB} index={index}/> 
                </div>  
            </div>
        );
        else 
        return (
            <div className="container">
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>CẢNH BÁO!</strong> Có {count} sinh viên thuộc diện nghi vấn
                </div>
                <h1>Danh sách sinh viên chưa có mặt tại phòng thi PTEST</h1>    
                <div>
                     <table className = "table table-bordered table-hover">
                        <thead>
                              <tr>
                                <th>ID</th>
                                <th>Tên Sinh Viên</th>
                                <th>Lớp</th>
                                <th>Ngày sinh</th>
                            </tr>
                        </thead>
                        <tbody>
                              {result !== '' ? result : ''}
                        </tbody>
                    </table>             
                </div>
                <div id = "details">
                <Product id={id} name={name} img={img} Class={Class} DoB={DoB} index={index}/> 
                </div>  
            </div>
        );
    }
}

export default Products;