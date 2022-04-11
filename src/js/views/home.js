import { element } from "prop-types";
import React, { useContext, useState } from "react";
import "../../styles/home.css";
//import { useContext, useState } from "react/cjs/react.production.min";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [item, setItem] = useState("");

  return (
    <div className="container text-center mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New task"
          onChange={(event) => {
            setItem(event.target.value);
          }}
          value={item}
        />
      </div>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => {
          if (item !== "") {
            actions.addItem(item);
            setItem("");
          }
        }}
      >
        Submit
      </button>

      <ul className="list-group">
        {store.list.map((element, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-around justify-content-center p-2  bg-light"
            >
              {element.done ? (
                <p className="align-self-end text-dark fs-3 mb-0">
                  {element.label}
                </p>
              ) : (
                <p className="ms-5 text-primary">{element.label}</p>
              )}

              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  actions.deleteItem(
                    store.list.filter((item, i) => i !== index)
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
