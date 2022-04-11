import { Redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: [],
    },
    actions: {
      getData: () =>{ 
        fetch(
          "https://assets.breatheco.de/apis/fake/todos/user/cruzdanielyanez")
          .then((response) => response.json())
          .then((result) => setStore({ list: result }))
          .catch((error) => console.log("error", error))
    },
    addItem: (item) => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/cruzdanielyanez", {
        method: "PUT",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...getStore().list,
          { label: item, done: false },
        ]),
      })
        .then((response) =>
          response.status == 200 ? getActions().getData() : ""
        )
        .catch((error) => console.log("error", error))
    },
	deleteItem: (list) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/cruzdanielyanez", {
		  method: "PUT",
		  redirect: "follow",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(list),
		})
		  .then((response) =>
			response.status == 200 ? getActions().getData() : ""
		  )
		  .catch((error) => console.log("error", error))
	  },
	}
  };
};



export default getState;
