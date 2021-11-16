import {useState} from 'react'
import {Link,useHistory,useRouteMatch,useParams} from 'react-router-dom'
const AddComponent = () => {
    const[count,setCount]=useState(0);
    const history=useHistory();
    const match=useRouteMatch();
    const current=useParams();
    console.log(match.url);
    console.log(current);

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

           history.push("/")
         }
       }>
       multiplication</button>
        </>
    )
}

export default AddComponent
