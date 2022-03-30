import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [taskname, setTaskname] = useState("");
	const [todoList, setTodolist] = useState([]);
	return (
		<>
			<div>
				<h1>Todo List</h1>
				<input
					type="text"
					placeholder="add task"
					onChange={(e) => {
						setTaskname(e.target.value);
					}}
					value={taskname}
				/>
				<button
					onClick={() => {
						setTodolist([...todoList, taskname]);
						setTaskname("");
					}}>
					Add Todo
				</button>
				<ul>
					{todoList.map((todo, index) => {
						return (
							<li key={index} className="d-flex flex row">
								<p>{todo}</p>
								<button
									onClick={() => {
										setTodolist(() =>
											todoList.filter((item) => {
												item !== todo;
											})
										);
									}}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
				<div>{todoList.length}</div>
			</div>
		</>
	);
};

//	<button className="btn-btn-outline-secondary" type="button">
//</button>	<div>Input Value:{inputValue}</div>

//	<div>
//		{todolist.map((todo, index) => {
//		return <h1 key={index}>{todo}</h1>;
//		})}
//	</div>
