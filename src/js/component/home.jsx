import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [taskName, setTaskname] = useState("");
	const [todoList, setTodolist] = useState([]);
	return (
		<>
			<div className="d-flex rounded-3 flex-column w-25 p-5 mx-auto border border-5 mt-3">
				<div className="card-header bg-info bg-gradient fs-1 text d-flex justify-content-center">
					Todo-list
				</div>

				<div class="input-group mb-0 ms-0 d-flex mt-3  justify-content-center  ">
					<input
						aria-describedby="button-addon2"
						className=" input- group mb-0 fs-3 text me-0"
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
						onKeyUp={(e) => {
							if (taskName !== "" && e.key == "Enter") {
								setTodolist([...todoList, taskName]);
								setTaskname("");
							}
						}}
					/>
					<button
						id="button-addon2"
						type="button"
						className=" btn btn-outline-secondary  text-dark"
						onClick={(e) => {
							if (taskName !== "") {
								setTodolist([...todoList, taskName]);
								setTaskname("");
							}
						}}>
						Add Todo
					</button>
				</div>
				<ul className="list-group mt-3">
					{todoList.map((todo, index) => {
						return (
							<li
								key={index}
								className="list-group-item d-flex justify-content-around justify-content-center p-2  bg-light">
								<p className="align-self-end text-dark fs-3 mb-0">
									{todo}
								</p>

								<button
									type="button"
									class="btn btn-dark"
									onClick={() => {
										setTodolist(
											todoList.filter(
												(item, i) => i !== index
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
					<spam className="ms-3"> Item left</spam>
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
