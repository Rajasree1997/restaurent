import {useState} from 'react'

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
        </>
    )
}

export default ProductComponents
