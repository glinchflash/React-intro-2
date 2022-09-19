import React, {useState} from "react";
import InputForm from "./InputForm";

export default function ToDo(){
    let initialTodo = ["Sleep", "Game"];
    const [todos , setTodos] = useState(initialTodo)

    const handleChange = e => {
        if(e.target.checked){
            console.log(e.target.value + " is checked");
        }else{
            console.log(e.target.value + " is unchecked");
        }
    }

    const addTODO = (value) => {
        const nextTodo = value;
        console.log(nextTodo);
        const newTodos = [...todos];
        newTodos.push(nextTodo);
        setTodos(newTodos);
    }

    return(

        <div>
            <InputForm addTodo={addTODO}/>
            <h4>TODO's</h4>
            <ul>
                {todos.map((item, i) => {
                    return(
                    <li key={i}><input onChange={handleChange} type="checkbox" value={item}/> {item}</li>
                    )
                })}
            </ul>
        </div>

    )

}