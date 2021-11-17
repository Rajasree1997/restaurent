import React, {useState}from 'react'


const FoodCart = ({title,imageUrl,price,description,status,deleteCard,toggleStatus,editFood}) => {
const[isDeleted,setIsDeleted]=useState(false);
    return (
        <div className={`food_card ${isDeleted?"food-card--deleted":""}` } >
            <div className="food-card-closebutton"onClick={()=>{
                setIsDeleted(true)
                setTimeout(deleteCard,200)
            }
        }>

            </div>
            <div
                className="food-card-edit-button"
                onClick={editFood}/>
            <img className="food_card_thumbnail" src={imageUrl} alt={title}/>
        <div className="food-card-details-section">
         <div className="food_card-title">
        {title}
        </div>
      <div className="food_card-price">
      ₹{price}
      </div>
      <div className={`food-card-availability ${status?
      "food-card-availability--available":
    "food-card-availability--unavailable"}`
      }
      onClick={toggleStatus}>
      
          {status? "Available":"Unavailable"}
      </div>
    <div className="food_card-description">
        {description}
        </div>
        </div>
   
</div>
    )
}

export default FoodCart
