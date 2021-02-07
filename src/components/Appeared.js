import React, { Component } from 'react';
import Product from './product';
import axios from 'axios';
import Existcan from './Existcan';
import unnamed from "./unnamed.png"
import firebase from "firebase"

class Appeared extends Component {

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
            console.log(res.data);
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
            index: index,
            time: candidate.time, 
            imgappear: candidate.imgappear
        })   
        window.scrollTo(0,document.body.scrollHeight);
        this.getImage(candidate.id, candidate.imgappear);  
    }

    getImage(image, appear) {
        const storage = firebase.storage().ref()
        if (appear=='null')
            storage.child(`${image}.jpg`).getDownloadURL().then((url) =>{
                this.state.imgappear = url
                this.setState(this.state)
            })
        else 
        storage.child(`${appear}`).getDownloadURL().then((url) =>{
            this.state.imgappear = url
            this.setState(this.state)
        })

    }

    
    render() {
        var candidates = []; 
        candidates =  Object.keys(this.state.candidates).map(k => this.state.candidates[k]);
        //console.log(candidates);
        const {id, name, img, Class, DoB, index, time, imgappear} = this.state;
        var count = 0;         

        var result = candidates.map((candidate, index) => {
            if (candidate.suspicious == "true") count++; 
            if (candidate.appear == "true") return(
                <tr key = {index}>
                <td onClick = {() => this.HandleChangeProduct(candidate, index)}>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.Class}</td>
                <td>{candidate.DoB}</td>
                <td>{candidate.time}</td>
                </tr>
            ); 
        });
        if (count == 0) 
        return (
            <div className="container ">
                <h1>Danh sách sinh viên đã có mặt tại phòng thi PTEST</h1>    
                <div>
                     <table className = "table table-bordered table-hover">
                        <thead>
                              <tr>
                                <th>ID</th>
                                <th>Tên Sinh Viên</th>
                                <th>Lớp</th>
                                <th>Ngày sinh</th>
                                <th>Thời gian vào phòng thi</th>
                            </tr>
                        </thead>
                        <tbody>
                              {result !== '' ? result : ''}
                        </tbody>
                    </table>             
                </div>
                <Existcan id = {id} name = {name} Class = {Class} DoB = {DoB} img = {img} index = {index} time = {time} imgappear = {imgappear}/>
            </div>
            );
        else 
        return (
            <div className="container">
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>CẢNH BÁO!</strong> Có {count} sinh viên thuộc diện nghi vấn
                </div>
                <h1>Danh sách sinh viên đã có mặt tại phòng thi PTEST</h1>    
                <div>
                     <table className = "table table-bordered table-hover">
                        <thead>
                              <tr>
                                <th>ID</th>
                                <th>Tên Sinh Viên</th>
                                <th>Lớp</th>
                                <th>Ngày sinh</th>
                                <th>Thời gian vào phòng thi</th>
                            </tr>
                        </thead>
                        <tbody>
                              {result !== '' ? result : ''}
                        </tbody>
                    </table>             
                </div>
                <Existcan id = {id} name = {name} Class = {Class} DoB = {DoB} img = {img} index = {index} time = {time} imgappear = {imgappear}/>
            </div>
            );
    }
}

export default Appeared;
