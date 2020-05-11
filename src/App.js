import React,{Component} from "react";
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { Route, Switch, Router} from 'react-router-dom';
class App extends Component{
    render(){
        return(
        <div>
 
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/user/:id' component={UserDetails}/>
    </Switch>
        </div>);
    }
}   

export default App;