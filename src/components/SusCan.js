import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase'


class SusCan extends Component {
	onSame = (id, index, time) => {	
		if (id)
		if (confirm("Bạn có chắc chắn 2 tấm ảnh này là cùng một người? ")){ //eslint-disable-line
			console.log(index);
			console.log(id); 
			firebase.database().ref('info/' + index).update({
				appear: "true", 
				suspicious: "false", 
				imgappear: "sus" + id + ".jpg", 
				time: time
			}).then(res => {
				location.reload(); //eslint-disable-line
			}); 
		}
	}
	onDiff = (id, index, imgappear) => {	
		const storage = firebase.storage().ref()
		storage.child('sus' + id + '.jpg').delete().then(function(){
		}).catch(function(error){
			console.log(error); 
		})
		if (id)
		if (confirm("Bạn có chắc chắn 2 tấm ảnh này không phải cùng một người? ")){ //eslint-disable-line
			console.log(index);
			console.log(id); 
			if (imgappear == "null")
				firebase.database().ref('info/' + index).update({
					appear: "false", 
					suspicious: "false", 
					time: "null"
				}).then(res => {
					location.reload(); //eslint-disable-line
				}); 
			else 
				firebase.database().ref('info/' + index).update({
					suspicious: "false"
				}).then(res => {
					location.reload(); //eslint-disable-line
				});
		}
	}

	render() {

		var {name, img, Class, DoB, id, index, time, imgappear, imgsus} = this.props;
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
								<img src = {imgsus}/>
            					<div className="caption">
            						<h3>{name} - {Class}</h3>
									<h4>Ngày sinh: {DoB}</h4>
            						<p>
            							Sinh viên đang bị nghi vấn
            						</p>
									<p>
										Thời gian sinh viên được kiểm tra: {time}
									</p>
            					</div>
								<p>
									<button type="button" className="btn btn-success" onClick={()=> this.onSame(id, index, time)}>Cùng một người</button>
									<button type="button" className="btn btn-danger mr-10" onClick={()=> this.onDiff(id, index, imgappear)}>Không cùng một người</button>
            					</p>
            				</div>
            			</div>
            	</div>
        	</div>
		);
		return (<div></div>)
    }
}

export default SusCan;