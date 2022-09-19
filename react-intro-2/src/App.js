import './App.css';
import InputForm from "./components/InputForm";
import ToDo from "./components/ToDo";
import Header from "./components/Header";
import React, {useState, useEffect} from "react";

// const LSKEY = "MyTodoApp";

function App() {
    // let initialTodo = [LSKEY+"Sleep", LSKEY+"Game"];
    // const [todos, setTodos] = useState([]);
    const [todos , setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        console.log(savedTodos);
        return savedTodos;
        });

    function addTodo(todo) {
        if (todos){
                const nextTodo = todo;
                const newTodos = [...todos];
                newTodos.push(nextTodo);
                console.log(newTodos);
                return setTodos(newTodos);
            }else{
                return setTodos([todo]);
            }
    }



//retrieve todos into local storage
    useEffect(() => {
        const savedTodos = JSON.parse(window.localStorage.getItem('todos'));
        if(savedTodos){
            setTodos(savedTodos)
        }
    }, []);

// set todos from local storage
    useEffect(() => {
       window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    return (
    <div className="App">
        <Header/>
        <InputForm addTodo={addTodo}/>
        <ToDo todos={todos} settodos={setTodos}/>
    </div>
  );
}

export default App;
