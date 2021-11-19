import React, {useState}from 'react'

const EditScreen = ({setEditScreenVisibility,editFoodIndex,foodList,setFoodList,addForm}) => {
    const [editFoodForm,setEditFoodForm]=useState(foodList[editFoodIndex]);
    
    const {title,price,description}=editFoodForm;
    const editFoodSave=(e)=>{
        e.preventDefault();//delaod aavathe save aakan
        setFoodList(prev=>
            {let newList=[...prev];
                newList[editFoodIndex]=editFoodForm;
                return newList;


            })
            setEditScreenVisibility(false)
    
    }
    return (
        <div className="over-view-screen">
            <div className="edit-food-card-container">


                
            <div className="food-card-closebutton"
            onClick={()=>{
                if(addForm==="ADD NEW FOOD") {
                    setFoodList(foodList.filter((_value,i)=>editFoodIndex!==i))
                }
                setEditScreenVisibility(false);
             
            }
        }/>
            
                <h2>{addForm}</h2>
                <form onSubmit={editFoodSave}>



                <div className="input-feilds">
                    <label>Name :</label>
                    <input type="text" value={title}
                    onChange={(e)=>{
                        setEditFoodForm(prev=>{
                            return{
                                ...prev,
                                title: e.target.value
                            }
                        })
                    }
                   }   />


                </div>
                <div className="input-feilds">
                    <label>Price (₹) :</label>
                    <input type="number" value={price}
                    onChange={(e)=>{
                    setEditFoodForm(prev=>{
                        return{
                            ...prev,
                            price: e.target.value
                        }
                    })}}
                    />

                </div>
                <div className="input-feilds">
                    <label>Description :</label>
                   
                        <textarea value={description}
                        onChange={(e)=>{
                    setEditFoodForm(prev=>{
                        return{
                            ...prev,
                            description: e.target.value
                        }
                    })}}
                    />
                </div>
                <div className="submit-section">
                    <button type="Submit">save</button>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditScreen
