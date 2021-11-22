import { useState } from "react";
import postData from "./services/postData";


const CreateUser = ({history}) => {
    const [userName,setUserName] = useState("");
    const [errorTextVisibility,setErrorTextVisibility] = useState(false);
    const createNewUser=(e)=>{

        e.preventDefault();
        if(!userName)return
        fetch(`http://192.168.1.42:8086/todos/${userName}` )
        .then((result)=>result.json())
        .then((value)=>{
            if(value.length){
                setErrorTextVisibility(true);
                setUserName("");
            return;
            
        
    }
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
    
   })
   }
       
    if(localStorage.getItem("userName")){
        history.push("/learn/user");
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
            {errorTextVisibility && <div className="error-text">
            user already exist

            </div>}
        </div>
    )
}

export default CreateUser
