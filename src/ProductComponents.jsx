import {useState} from 'react'
import {Link} from 'react-router-dom'
const ProductComponents = () => {
    const[value,setvalue]=useState(1);
    return (
        <>
    <div className="count_button"
    onClick={
      ()=>{
        setvalue(value/2)
      }
      }
   >
     /
    </div> 
    <div className="count_value">
     {value}
    </div> 
     <div  className="count_button"
      onClick={
        ()=>{
          setvalue(value*2)
        }
        }
 
     >
     *
     </div>
     <Link to="/multi">addition
       </Link>
        </>
    )
}

export default ProductComponents
