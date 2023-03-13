import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }: any) => {
    const [detail, setDetail] = useState(todo.detail);

    const updateDescription = async (e: any) => {
        e.preventDefault();
        try {
            const body = { detail };
            const response = await fetch(
                `https://todolist-api-rwm3.onrender.com/todos/${todo.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            //@ts-ignore
            window.location = "/";
        } catch (error) {
            throw error;
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.id}`}
            >
                Edit
            </button>

            <div
                className="modal"
                id={`id${todo.id}`}
                onClick={() => setDetail(todo.detail)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo Item</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                onClick={() => setDetail(todo.detail)}
                            >
                            </button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={detail}
                                onChange={e => setDetail(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => setDetail(todo.detail)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;