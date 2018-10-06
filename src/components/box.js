import React, {Component} from 'react';



class Box extends Component{
	
    render(){
	return(
		
		<div>
		<div className='box'>
			<img className="photo" src={this.props.img}/>
			<h4 className="name">{this.props.name}</h4>
			<p className="description">{this.props.des}</p>

		</div>
		</div>
		

		);
}
}
export default Box;