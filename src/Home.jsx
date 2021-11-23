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
  imageUrl :"https://www.thespruceeats.com/thmb/3aS-MqMydQjW1n7RBGWNVYQagIo=/4494x3000/filters:fill(auto,1)/basic-turkish-chicken-kebab-3274263_19-5b4ce87746e0fb00370a5025.jpg",
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
  imageUrl :"https://i.ytimg.com/vi/-lwHfv0iMgY/maxresdefault.jpg",
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
  imageUrl :"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/vx75ufw9tru9yxgdorxy",
  quantity :"12pc",
  deliveryTime:"30m",
},
]
const Home=()=>{
  const [foodList,setFoodList] = useState(totalFoodList);

  const [editScreenVisibility,setEditScreenVisibility]=useState(false);
  const[editFoodIndex,setEditFoodIndex]=useState(null);
  const[lastId,setLastId]=useState(3);
  const[addForm,setAddForm]=useState("edit");
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
    <div className="title-image">
      <img src="https://www.pngitem.com/pimgs/m/630-6301193_sad-panda-cartoon-hd-png-download.png" alt=""/>
    <h1>EMPTY TUMMY 🢡 YUMMY TUMMY...</h1> 
    <img src="https://banner2.cleanpng.com/20180505/jde/kisspng-giant-panda-dab-red-panda-t-shirt-panda-avatar-5aedf34fbbbd48.965226651525543759769.jpg " alt=""/> 
      </div>
    <select
     //value={sortInput}
      onChange={(e)=>{
        //setSortInput(e.target.value);
        sort(e.target.value);

      }}>
     <option value="">Sort By Price</option> 
    <option value="high to low">High to Low </option>
    <option value="low to high">Low to High</option>
    </select>
    </div>
<div className="add-button">
<button onClick={()=>{
  let newFood = {

    id:lastId+1,
    title:"",
    price:0,
    status:true,
    flavour:"",
  description:"",
  imageUrl :"https://www.thespruceeats.com/thmb/3aS-MqMydQjW1n7RBGWNVYQagIo=/4494x3000/filters:fill(auto,1)/basic-turkish-chicken-kebab-3274263_19-5b4ce87746e0fb00370a5025.jpg",
  quantity :"12pc",
  deliveryTime:"30m",

  }
  setLastId(lastId+1);
  setEditFoodIndex(foodList.length);
  setFoodList(prev=>[...prev,newFood]);
  setEditScreenVisibility(true);
  setAddForm("ADD NEW FOOD")
}}>Add new

</button>


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
          editFood={()=>{
            setEditFoodIndex(i);
            setEditScreenVisibility(true);
            
            setAddForm("EDIT ME HERE");



          }}
          />)
        })
      }
    </div>
    {editScreenVisibility && <EditScreen
      setEditScreenVisibility={setEditScreenVisibility}
      editFoodIndex={editFoodIndex}
      foodList={foodList}
      setFoodList={setFoodList}
      addForm={addForm}
      

    />}
    </>
  )
 
}
export default Home;
