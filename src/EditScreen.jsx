import React from 'react'

const EditScreen = ({setEditScreenVisibility}) => {
    return (
        <div className="over-view-screen">
            <div className="edit-food-card-container">
            <div className="food-card-closebutton"
            onClick={()=>{
                setEditScreenVisibility(false)
              
            }
        }/>
            
                <h2>Edit Me Here</h2>
                <form>
                <div className="input-feilds">
                    <label>Name :</label>
                    <input type="text"/>
                </div>
                <div className="input-feilds">
                    <label>Price (₹) :</label>
                    <input type="number"/>
                </div>
                <div className="input-feilds">
                    <label>Description :</label>
                   
                        <textarea/>
                </div>
                <div className="submit-section">
                    <button type="submit">save</button>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditScreen
