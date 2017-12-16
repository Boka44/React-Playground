import React, { Component } from 'react';


export class List extends Component {	
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
	delete(key) {
    this.props.delete(key);
  }
  	render() {
  		return(

	<ul>
		{
			this.props.items.map((item, key) => <div className="listItems" 
				onClick={(e) => this.delete(item)}
			 	key={key}>{item}</div>)
		}
	</ul>
		)
  	}
}
