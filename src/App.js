import Home from './Home'
import Learn from './Learn';
import TodoList from './TodoList';
import Login from './Login';
import CreateUser from './CreateUser';
import Async from './JS/Async';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/js/async" component={Async}/>
      <Route path="/TodoList" component={TodoList}/>

      <Route path="/learn/user" component={Learn}/>
      <Route path="/learn/login" component={Login}/>
      <Route path="/learn" component={CreateUser}/>
      <Route path="/" component={Home}/>
       
     </Switch>
     </Router> 
    
  )
}

export default App
