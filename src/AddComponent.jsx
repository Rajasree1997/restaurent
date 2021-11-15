import {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
const AddComponent = () => {
    const[count,setCount]=useState(0);
    const history=useHistory();
    return (
        <>
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
       <Link to="/">multiplication
       </Link>
       <button onClick={
         ()=>{

           history.pushState("/")
         }
       }>
       multiplication</button>
        </>
    )
}

export default AddComponent
