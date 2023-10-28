import React, { Component } from "react";
class Home extends Component{
    constructor(props){
        super();
        this.state={counter:0,};
        console.log("constructor");
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    componentWillUnmount(){
        console.log("component will mount")
    }
    // componentDidMount(){
    //     console.log("component did mount")
    //     this.setState({
    //         counter: this.state.counter+1
    //     })
    // }





    render(){
        console.log("component rendered")
        return(
            <div>
                <h1>This is an example for state:{this.state.counter}</h1>
                <button className="btn btn-primary" onClick={()=> this.increment()}>Increment</button>
                <button className="btn btn-secondary" onClick={() => this.decrement()}>decrement</button>
            </div>
            
            
        )
    }


}
export default Home;