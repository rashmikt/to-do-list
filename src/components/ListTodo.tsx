import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id: number) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter((todo: any) => todo.id !== id));
    } catch (error) {
      throw error;
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getTodos();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Task Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: any) => (
            <tr key={todo.id}>
              <td>{todo.detail}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
