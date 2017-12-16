import React, { Component } from 'react';
import { List } from './list';

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			items: []
		};
		this.deleteItem = this.deleteItem.bind(this);
	}
	onChange = (e) => {
		this.setState({term: e.target.value});
	}
	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.term === "") {
			alert("You must enter something!");
			
		} else {
			this.setState({
				term: '',
				items: [...this.state.items, this.state.term]
			})
		}
	}

	deleteItem(index){
          
    				console.log('index: ', index)
            this.setState({items: this.state.items.filter(function(item){
                console.log(item)
                return item !== index
            })})
            console.log(this.state.items)
         

        }

	render() {
		return(
			<div>
				<h3>You currently have {this.state.items.length} things to do.</h3>
				<form className="Todo" onSubmit={this.onSubmit}>
					<input placeholder="Enter task" value={this.state.term} onChange={this.onChange} />
					<button>add</button>
				</form>
				<List items={this.state.items} delete={this.deleteItem}/>
			</div>
		)
	}
}


