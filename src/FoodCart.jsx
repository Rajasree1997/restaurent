import React from 'react'

const FoodCart = ({title,imageUrl,price,description,status,deleteCard}) => {

    return (
        <div className="food_card" >
            <div className="food-card-closebutton"onClick={deleteCard}>

            </div>
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
      }>
      
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
