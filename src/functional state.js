import React, {useState} from "react";

function CounterInFunc(){
    const [count, Setcount] = useState(0)
    return(
        <div>
            <h1>Iam functional component......</h1>
            <h1>count:{count}</h1>
            <button onClick={()=>{Setcount(count+1)}}>Increment</button>
        </div>
    )
}
export default CounterInFunc;