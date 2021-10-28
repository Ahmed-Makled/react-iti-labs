import React from "react";

export default function TodoList({ todo, index, completeTodo, removeTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
      <div className="d-flex align-items-center">

      <input onClick={() => completeTodo(index)} class="form-check-input me-2" type="checkbox" value="" aria-label="..." />

        <span
          style={{
            textDecoration: todo.hasCompleted ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      <a onClick={() => removeTodo(index)} title="Remove item">
        <i className="fas fa-times text-primary"></i>
      </a>
    </li>
  );
}

