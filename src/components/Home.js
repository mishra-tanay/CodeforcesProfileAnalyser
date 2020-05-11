import React,{Component} from "react";
import Form from './Form';
import Title from './Title';
class Home extends Component{
    render(){
        return(
        <div>
            <Title/>
            <Form/>
        </div>);
    }
}   

export default Home;