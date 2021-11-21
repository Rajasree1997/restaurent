import { useState } from "react";
import postData from "./services/postData";


const CreateUser = ({history}) => {
    const [userName,setUserName] = useState("");
    const createNewUser=(e)=>{

        e.preventDefault();
        postData("/todos",
        {
            user:userName,
            todos: []
            
          }).then(result=>{
              if(result){
                  history.push(`/learn/${userName}`);

              }
          })
        
    }
    return (
        <div className="container">
            <h2>CREATE USER</h2>
            <form style={{display:"grid",
            gridTemplateColumns :"auto auto",
        justifyContent:"center"}}
        onSubmit={createNewUser}>
            <input type="text" 
            value={userName}
            onChange={
                (e)=>{
                    setUserName(e.target.value);
                }
            }
            />
            <button className="user-add" type="submit">ADD</button>
            </form>
        </div>
    )
}

export default CreateUser
