import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase'

class Existcan extends Component {
	onDisappear = (id, index, imgappear) => {	
		//var {candidates} = this.state; 
		const storage = firebase.storage().ref()
		if (id)
		if (confirm("Bạn có chắc chắn sinh viên này chưa có mặt? ")){ //eslint-disable-line
			console.log(index);
			console.log(id); 
			storage.child(id + '.jpg').delete().then(function(){
			}).catch(function(error){
				console.log(error); 
			})

			storage.child('sus' + id + '.jpg').delete().then(function(){
			}).catch(function(error){
				console.log(error); 
			})

			firebase.database().ref('info/' + index).update({
				appear: "false", 
				time: "null"
			}).then(res => {
				location.reload(); //eslint-disable-line
			}); 
		}
	}
	render() {

		var {name, img, Class, DoB, id, index, time, imgappear} = this.props;
		if (id!='')
        return (
        	<div>
        		<h1>
                	Hình ảnh của sinh viên {name}
            	</h1>
            	<div>
            			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            				<div className="thumbnail">
            					<img src = {img}/>
								<img src = {imgappear}/>
            					<div className="caption">
            						<h3>{name} - {Class}</h3>
									<h4>Ngày sinh: {DoB}</h4>
            						<p>
            							Sinh viên này đã có mặt
            						</p>
									<p>
										Thời gian sinh viên vào phòng thi: {time}
									</p>
            					</div>
								<p>
            						<button type="button" className="btn btn-danger mr-10" onClick={()=> this.onDisappear(id, index, imgappear)}>Chưa có mặt</button>
            					</p>
            				</div>
            			</div>
            	</div>
        	</div>
		);
		return(<div></div>)
    }
}

export default Existcan;