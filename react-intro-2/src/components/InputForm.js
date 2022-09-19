import React, {useRef} from "react";
const LSKEY = "MyTodoApp";

export default function InputForm(props) {
    const inputRef = useRef();

    const clickHandler = (e) =>{
        e.preventDefault();
        const input = inputRef.current;
        console.log(input.value);
        props.addTodo(input.value);
    }

        return (
            <div>
                <form>
                    <input ref={inputRef} type={"text"} placeholder={"Type a new Todo"}/>
                    <button onClick={clickHandler}>Add Todo</button>
                </form>
            </div>
        );
}

