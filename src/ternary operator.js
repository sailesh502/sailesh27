import React, { useState } from "react";

function TernaryOperator(){

    const [state, setstate] =useState(false);
    return state ? (<div> welcome </div>) : (<div>Hello student</div>)


}
export default TernaryOperator;