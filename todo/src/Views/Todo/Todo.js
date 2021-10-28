import React, { useState } from "react";
import TodoForm from "../../Components/TodoAdd/TodoAdd";
import Todo from "../../Components/TodoList/TodoList";
import "./Todo.css";
export default function TodoComponent() {
  const [todos, setTodos] = useState([
    {
      text: 'Remember Meeting Tomorrow',
      hasCompleted: false,
    },

  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <section  className="py-3">
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h6 className="mb-3"> Todo List</h6>
                <TodoForm addTodo={addTodo} />

                <ul className="list-group mb-0">
                  {todos.map((todo, index) => {
                    return (
                      <Todo
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
