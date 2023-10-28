import React,{useEffect,useState} from "react";

function ExampleUseEffect(){
    const [count, setCount]=useState(0)
    // useEffect(()=>{
    //     console.log("example for useeffect")
    //     if(count>10){
    //         setCount(0)
    //     }
    // },[count])
    useEffect(()=>{
        setTimeout(()=>{
            setCount((previousState)=>{return previousState+1})
            console.log("component did update",{count})
        },1000)
    },[count])

    // useEffect(()=>{
    //     console.log('The counter value is',{count})
    //     return()=>{console.log('component will unmount')}
    // },[count])

    return (
        <div>
        <h1>The counter value:{count}</h1>
            <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}
export default ExampleUseEffect;