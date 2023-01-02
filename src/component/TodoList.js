import React from 'react';
import TodoItem from './TodoItem'

import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.todo;
	});

	return (
		<ul className="tasks-list" style={{display:'flex', margin:'20px',flexWrap: 'wrap'}}>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;
