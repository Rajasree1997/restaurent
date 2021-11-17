import { useState } from 'react';
import EditScreen from './EditScreen';
import FoodCart from './FoodCart';
const totalFoodList =[

  {
  id:0,
  title: "chicken khabab",
  price: 160,
  status: true,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{id:1,
  title: "chicken 65",
  price: 200,
  status: true,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{
  id:2,
  title: "chicken fry",
  price: 250,
  status: false,
  flavour: "spicy",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus repellat, quos, necessitatibus debitis placeat illum ad fugit, dolores nihil a at pariatur suscipit esse quibusdam totam eius atque dolore.",
  imageUrl :"https://image.shutterstock.com/image-photo/homemade-spicy-chicken-65-white-260nw-699727963.jpg",
  quantity :"12pc",
  deliveryTime:"30m",
},
{
  id:3,
  title: "chicken chilly",
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
  const [foodList,setFoodList] = useState(totalFoodList);
  //const[sortInput,setSortInput]=useState();
  const sort=(order)=>{
    switch(order){
      case "high to low":
      setFoodList(prev=>{
        let newList =[...prev];
        return newList.sort((second,first)=>first.price-second.price);

      });
      break;
      case "low to high":
      setFoodList(
        prev=>{
          let newList=[...prev];

          return newList.sort((second,first)=>second.price-first.price);
        });
      break;
      default:
        break;

    }
  }
  return(
    <>
    <div className="sort-section">
      <label>Price</label>
    <select
     //value={sortInput}
      onChange={(e)=>{
        //setSortInput(e.target.value);
        sort(e.target.value);

      }}>
     <option value="">select</option> 
    <option value="high to low">high to low </option>
    <option value="low to high">low to High</option>
    </select>
    </div>
    <div className="food-card-list">
      {
        foodList.map((food,i)=>{
          return(<FoodCart{...food} key={food.id} deleteCard={()=>{
            setFoodList(foodList.filter((_value,index)=>i!==index))
          }}
          toggleStatus={()=>{
            setFoodList(prev=>{
              let newList=[...prev];//copy the list
              let newFood={...newList[i]};//copy the elements of the list
              newFood.status=!newFood.status;
              newList[i]=newFood;
              return newList;
            })
          }}
          />)
        })
      }
    </div>
    <EditScreen/>
    </>
  )
 
}
export default App;
