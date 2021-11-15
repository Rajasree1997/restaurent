import './App.css';
import ProductComponents from './ProductComponents';
import AddComponent from './AddComponent';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  
  return (
   
    <div className="App">
      <Router>
      <Routes>
    <Route path="/multi" component={<AddComponent/>}/>
     <Route path="/" component={<ProductComponents/>}/>
     </Routes>
     </Router> 
    

  </div>

  );
}

export default App;
