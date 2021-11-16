import './App.css';
import ProductComponents from './ProductComponents';
import AddComponent from './AddComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './parameter'
function App() {
  
  
  return (
   
    <div className="App">
      <Router>
      <Switch>
    <Route path="/multi" component={AddComponent}/>
     <Route path="/posts" component={Posts}/>
     <Route path="/" component={ProductComponents}/>
     </Switch>
     </Router> 
    

  </div>

  );
}

export default App;
