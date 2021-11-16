import { useState } from 'react';
import FoodCart from './FoodCart';
const totalFoodList =[
  {title: "chicken khabab",
  price: 160,
  status: true,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{title: "chicken 65",
  price: 160,
  status: true,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{title: "chicken fry",
  price: 160,
  status: false,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{title: "chicken chilly",
  price: 160,
  status: true,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
]
const App=()=>{
  const [foodList,setFoodList] = useState(totalFoodList)
  return(
    <div className="food-card-list">
      {
        foodList.map((food,i)=>{
          return(<FoodCart{...food} key={i} deleteCard={()=>{
            setFoodList(foodList.filter((_value,index)=>i!=index))
          }}/>)
        })
      }
    </div>
  )
}
export default App;
