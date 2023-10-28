import React from "react";
import NestedFunctionalComponent from "../functional component";



function DisplayingData(){
    return(
        <div>
        <h1>displaying data using functional component.</h1>
        <NestedFunctionalComponent user="sailesh" lname="Babu" />
        
        </div>
        
    );
}


export default DisplayingData;