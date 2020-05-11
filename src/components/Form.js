import React,{Component} from "react";

class Form extends Component{
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Username  ",e.target.elements.userName.value);
    }
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="userName" placeholder="Enter your Codeforces Handle"/>
                <button type="submit">Get Info </button>
            </form>
        </div>);
    }
}   

export default Form;