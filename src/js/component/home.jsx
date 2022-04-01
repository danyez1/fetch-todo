import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [taskName, setTaskname] = useState("");
	const [todoList, setTodolist] = useState([]);
	return (
		<>
			<div className="d-flex  flex-column w-25 p-5 mx-auto border border-5 mt-3">
				<div className="card-header bg-info bg-gradient fs-1 text d-flex justify-content-center">
					Todo-list
				</div>
				<input
					className="fs-3 text mt-3"
					type="text"
					placeholder="add task"
					onChange={(e) => {
						if (taskName !== "" && e.key == "Enter") {
							setTodolist([...todoList, taskName]);
							setTaskname("");
						}
						setTaskname(e.target.value);
					}}
					value={taskName}
				/>
				<button
					type="button"
					className=" btn btn-dark w-25 mt-3 text-white d-flex align-self-end "
					onClick={() => {
						setTodolist([...todoList, taskName]);
						setTaskname("");
					}}>
					Add Todo
				</button>
				<ul className="list-group mt-3">
					{todoList.map((todo, index) => {
						return (
							<li
								key={index}
								className="list-group-item d-flex justify-content-around justify-content-center p-2  bg-light">
								<p className="align-self-end text-dark fs-3">
									{todo}
								</p>

								<button
									type="button"
									class="btn btn-dark"
									onClick={() => {
										setTodolist(
											todoList.filter(
												(item) => item !== todo
											)
										);
									}}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
				<div className="bg-warning mt-5 w-25 p-3 rounded-pill bg-opacity-50 justify-content-center d-flex ">
					{todoList.length}
				</div>
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
