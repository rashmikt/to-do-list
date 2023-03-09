import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [detail, setDetail] = useState("");

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const body = { detail };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      //@ts-ignore
      window.location = "/";
    } catch (error) {
      throw error;

    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={detail}
          onChange={e => setDetail(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;