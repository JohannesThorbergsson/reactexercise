import React from "react";
type Name = {name: string}
export default function GreetUser(props: Name){
    return(
        <div>
            <h1>
                Greet {props.name}
            </h1>
        </div>
    )
}