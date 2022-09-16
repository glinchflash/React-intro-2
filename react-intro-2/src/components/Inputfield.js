import React from "react";
import Button from "./Button";
export default function Inputfield() {
        return (
            <div>
                <form>
                    <input type={"text"} placeholder={"Type a new Todo"}/>
                    <Button/>
                </form>
            </div>
        );
}

