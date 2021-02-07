import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase'
import { Link } from "react-router-dom";

class Product extends Component {
	//<button type="button" className="btn btn-danger mr-10">Nghi vấn</button>
	onAppear = (id, index) => {	
		//var {candidates} = this.state; 
		if (id)
		if (confirm("Bạn có chắc chắn sinh viên này đã có mặt? ")){ //eslint-disable-line
			console.log(index);
			console.log(id); 
			firebase.database().ref('info/' + index).update({
				appear: "true"
			}).then(res => {
				location.reload(); //eslint-disable-line
			}); 
		}
	}
	render() {

        var {id, name, img, Class, DoB, index} = this.props;		
		if (id!= '')
        return (
        	<div>
        		<h1>
                	Hình ảnh của sinh viên {name}
            	</h1>
            	<div>
            		<div>
            			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            				<div className="thumbnail">
            					<img src = {img}/>
            					<div className="caption">
            						<h3>{name} - {Class}</h3>
									<h4>Ngày sinh: {DoB}</h4>
            						<p>
            							Hiện tại sinh viên này chưa có mặt
            						</p>
            						<p>
            							<button type="button" className="btn btn-success" onClick={()=> this.onAppear(id, index)}>Đã có mặt</button>
            						</p>
            					</div>
            				</div>
            			</div>
            		</div>
            		<div></div>
            	</div>
        	</div>
         
		);
		else
		return(<div></div>);
    }
}

export default Product;