import React,{ Component } from "react";
import NestedFunctionalComponent from "./functional component";



// class DisplayingClass extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count:0
//         }
//     }
//     stateCounter(){
//         this.setState({
//             count : this.state.count+1
//         })
//     }







//     render(){
//         return(
            
//                 <div>
//                     <h1>displaying data from a class components..{this.props.user} </h1>
//                     <h1>count : {this.state.count}</h1>
//                     {/* <NestedFunctionalComponent/> */}
//                     {/* <button type="button" onClick={()=>{this.stateCounter()}}>Increment</button> */}
//                 </div>
            
//         )      
        
//     }
// }
class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state={istoggleon: false};
        this.handleclick=this.handleclick.bind(this);
    }
    handleclick(){
        this.setState(prevState=>({
            istoggleon: !prevState.istoggleon
        }));
    }
    render(){
        return(
            <button onClick={this.handleclick}>
                {this.state.istoggleon ? 'on':'off'}
            </button>
        )
    }
}

export default Toggle;