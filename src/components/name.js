import React, { Component } from 'react';
import { Todo } from './todo';

export class Name extends Component {
	constructor(props) {
		super(props);
		this.state = { name: " " };
		this.nameHandler = this.nameHandler.bind(this);
	}
	nameHandler(e) {
		this.setState({name: e.target.value})
	}
	render() {
		return (
			<div>
				<p>Enter your name</p>
				<input type="text" onChange={this.nameHandler} value={this.state.name}/>
	        <h1>Hello {this.state.name}!</h1>
			<Todo />
			</div>
		);
	}

}