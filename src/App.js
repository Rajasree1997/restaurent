import Home from './Home'
import Learn from './Learn';
import TodoList from './TodoList';
import CreateUser from './CreateUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/TodoList" component={TodoList}/>

      <Route path="/learn/user" component={Learn}/>
      <Route path="/learn" component={CreateUser}/>
      <Route path="/" component={Home}/>
       
     </Switch>
     </Router> 
    
  )
}

export default App
