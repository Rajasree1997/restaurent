import { useState } from 'react';
import './App.css';
import Heading from './headings'
import ProductComponents from './ProductComponents';
function App() {
  const[count,setCount]=useState(0);
  
  return (
    <div className="App">
     <div className="count_button"
      onClick={
        ()=>{
          setCount(count-1)
        }
        }
     >
       -
      </div> 
      <div className="count_value">
       {count}
      </div> 
       <div  className="count_button"
        onClick={
          ()=>{
            setCount(count+1)
          }
          }
   
       >
       +
       </div>
    

     <ProductComponents />


  </div>
  );
}

export default App;
