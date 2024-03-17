import React, { Fragment, useState, useEffect } from 'react';
import TodoButton from "./TodoButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCancel } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import './App.css'; 
function TodoModal() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }, []);
    const date = new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'medium' });
    
  
    const addTodo = () => {
      if (newTodo.trim() !== "") {
        const updatedTodos = [...todos, { id: Date.now(),time:date, text: newTodo, completed: false }];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setNewTodo("");
      }
    };
  
    const deleteTodo = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };
  
    const toggleComplete = (id) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };
  
    return (
      <Fragment>
        <div className="container todo-modal mt-5">
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a new todo"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <TodoButton text="Add list" className="btn btn-primary" onClick={addTodo}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-group">
                {todos.map(todo => (
                  <li key={todo.id} className={`list-group-item ${todo.completed ? "completed" : ""} mt-1`}>
                    <span>{todo.text}</span>
                    <span>{todo.time}</span>
                    <div className="btn-group">
                   
                                           
                        {todo.completed ? <MdCancel  className=" btn-sm mx-3 text-danger mt-2" onClick={() => toggleComplete(todo.id)} />: <MdOutlineDoneOutline  className=" btn-sm mx-3 text-success mt-2" onClick={() => toggleComplete(todo.id)} />  }
                      <FaRegTrashAlt  className="mt-2 btn-sm text-danger" onClick={() => deleteTodo(todo.id)}/>
            
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  
  export default TodoModal;