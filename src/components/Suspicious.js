import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from 'axios';
import unnamed from "./unnamed.png"
import SusCan from './SusCan';
import firebase from 'firebase';



class Suspicious extends Component {
   
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
            index: 0, 
            time: '', 
            imgappear: unnamed, 
            imgsus: unnamed
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
        //setInterval(() => {location.reload()}, 15000);  //eslint-disable-line

    }

    HandleChangeProduct(candidate, index){
        console.log('a');
        this.setState({
            id: candidate.id,
            name: candidate.name,
            img: candidate.img,
            DoB: candidate.DoB,
            Class: candidate.Class, 
            index: index,
            time: candidate.time, 
            imgappear: candidate.imgappear, 
            imgsus: candidate.imgsus
        })   
       // window.scrollTo(0,document.body.scrollHeight);
       this.getImage(candidate.id);  
       var elm = document.getElementById("details"); 
        elm.scrollIntoView(true);
    }

    getImage(image) {
        const storage = firebase.storage().ref()
        storage.child(`sus${image}.jpg`).getDownloadURL().then((url) =>{
            this.state.imgsus = url
            this.setState(this.state)
        })
    }

    render() {
        var candidates = [] ; 
        candidates =  Object.keys(this.state.candidates).map(k => this.state.candidates[k]); 
        console.log(candidates); 
        const {id, name, img, Class, DoB, index, time, imgappear, imgsus} = this.state;
         
        //console.log(match);  
        var count = 0;
        var result = candidates.map((candidate, index) => {
            if (candidate.suspicious == "true"){
                count++; 
                return(
                <tr key = {index}>
                    <td onClick = {() => this.HandleChangeProduct(candidate, index)}>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.Class}</td>
                    <td>{candidate.DoB}</td>
                    <td>{candidate.time}</td>
                </tr>
                ); 
            }
        });
        if (count)
        return (
                <div className="container">     
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>CẢNH BÁO!</strong> Có {count} sinh viên thuộc diện nghi vấn
                </div>
                <h1>Danh sách sinh viên thuộc diện nghi vấn phòng thi PTEST</h1>    
                <div>
                     <table className = "table table-bordered table-hover">
                        <thead>
                              <tr>
                                <th>ID</th>
                                <th>Tên Sinh Viên</th>
                                <th>Lớp</th>
                                <th>Ngày sinh</th>
                                <th>Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                              {result !== '' ? result : ''}
                        </tbody>
                    </table>             
                </div>
                <div id = "details">
                <SusCan id={id} name={name} img={img} Class={Class} DoB={DoB} index={index} time={time} imgappear={imgappear} imgsus = {imgsus}/> 
                </div>  
            </div>
        );
        else 
        return (
            <div className="container">     
            <h1>Danh sách sinh viên thuộc diện nghi vấn phòng thi PTEST</h1>    
            <div>
                 <table className = "table table-bordered table-hover">
                    <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tên Sinh Viên</th>
                            <th>Lớp</th>
                            <th>Ngày sinh</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                          {result !== '' ? result : ''}
                    </tbody>
                </table>             
            </div>
            <div id = "details">
            <SusCan id={id} name={name} img={img} Class={Class} DoB={DoB} index={index} time={time} imgappear={imgappear} imgsus={imgsus}/> 
            </div>  
        </div>
    );
    }
}

export default Suspicious;