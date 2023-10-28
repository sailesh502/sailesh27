import axios from "axios";
import React,{Component} from "react";


class HttpCall extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            error:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data);
            this.setState({data:res.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    

    render(){
        return(
            <div>
                <h1>Axios</h1>
            </div>
        )
    }

}

export default HttpCall

