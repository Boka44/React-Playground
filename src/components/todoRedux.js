import React from 'react';
import { connect } from 'react-redux';
import dispatch from 'react-redux';

import NewTodo from './newTodoRedux';
import { addTodo } from '../actions/index';

const Todos = ({todos, dispatch}) => {
	return(
	<div>
		<h1>Todos</h1>
		<NewTodo onChange={e => {
			if(e.keyCode == 13) {
				dispatch(addTodo(e.target.value))
				e.target.value = "";
			}
		}}/>
		{todos.map(todo => <p key={todo}>{todo}</p>)}
	</div> 
)}

function mapStateToProps(todos) {
	return {
		todos
	}
}

export default connect(mapStateToProps) (Todos);