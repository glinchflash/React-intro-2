import React, {useState} from "react";
import EmptyList from "./EmptyList";


export default function ToDo(props){

    const [selectedTodos, setSelectedTodos] = useState([]);

    const handleChange = e => {
        if(e.target.checked){
            console.log(e.target.value + " is checked");
            const newSelectedTodos = [...selectedTodos];
            newSelectedTodos.push(e.target.value);
            setSelectedTodos(newSelectedTodos);
            console.log(selectedTodos);
        }else{
            console.log(e.target.value + " is unchecked");
            if (selectedTodos.includes(e.target.value)){
                const toDeleteFromArray = selectedTodos.indexOf(e.target.value);
                selectedTodos.splice(toDeleteFromArray,1);
                console.log(selectedTodos);
            }
        }

    }

    const removeFromTodo = () =>{
        if (selectedTodos){
            selectedTodos.map((item) =>{
                let currentTodos = JSON.parse(window.localStorage.getItem('todos'));
                currentTodos.map((todo)=>{
                    if (todo === item){
                        const toDeleteFromCurrentTodos = currentTodos.indexOf(item);
                        console.log(toDeleteFromCurrentTodos);
                        currentTodos.splice(toDeleteFromCurrentTodos);
                        console.log(currentTodos);
                        window.localStorage.setItem('todos', JSON.stringify(currentTodos))
                    }
                })
            })
        }
    }


    const removeFullList = () =>{
        window.localStorage.clear();
    }

    return(
        <div>
            <h4>TODO's</h4>
            <ul>
                {props.todos? props.todos.map((item, i) => {
                    return(
                            <div key={i}>
                                <li key={i}><input onChange={handleChange} type="checkbox" value={item}/>{item}</li>
                            </div>
                        )
                    }): <EmptyList/>}
            </ul>
            <button onClick={removeFromTodo}>Delete</button>
            <button onClick={removeFullList}>Delete all</button>
        </div>
    )
}