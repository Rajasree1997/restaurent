import { useState } from "react";
import postData from "./services/postData";


const CreateUser = ({history}) => {
    const [userName,setUserName] = useState("");
    const createNewUser=(e)=>{

        e.preventDefault();
        if(!userName)return
        postData("/todos",
        {
            user:userName,
            todos: []
            
          }).then(result=>{
              if(result){
                  localStorage.setItem("userName",userName);
                  history.push(`/learn/user`);

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
