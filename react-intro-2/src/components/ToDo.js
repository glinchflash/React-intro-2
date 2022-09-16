import React from "react";

export default function ToDo(){
    let todo = ["Sleep", "Game"]

    return(

        <div>
            <h4>TODO's</h4>
            <ul>
                {todo.map((item) => {
                    return(
                    <li><input type="checkbox"/> {item}</li>
                    )
                })}
            </ul>
        </div>

    )

}