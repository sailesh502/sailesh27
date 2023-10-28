import React from "react";
import Name from "./components/name";

function NestedFunctionalComponent(props){
    return(
        <div>
            <h1>Data from nested component. {props.user} {props.lname}</h1>
            <Name location="Chennai" ></Name>
        </div>
    )
}

export default NestedFunctionalComponent;