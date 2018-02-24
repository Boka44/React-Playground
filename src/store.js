import { createStore } from 'redux';
import todos from './reducers/todo';
export default createStore(todos);