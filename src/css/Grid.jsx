import "./style.css";

const Grid = () => {
    return (
        <div className="grid-container">
          {[...Array(64)].map((_val,i)=>
          {let indexArray=[i%8 , Math.floor(i/8)];
            console.log(indexArray);
              return(
          
          <div style={{
              backgroundColor:i%16 <8 ? i%2 ? "black": "white" :i%2 ? "white" : "black",
              color:i%16 <8 ? i%2 ? "white": "black" :i%2 ? "black" : "white",
          }}>
              {indexArray[1]+","+indexArray[0]}


          </div>)})}  
            
   </div>)}
export default Grid
