import { useState } from "react";
import {Link} from "react-router-dom"

const  Login= ({history}) => {
    const [userName,setUserName] = useState("");
    const [errorTextVisibility,setErrorTextVisibility] = useState(false);
    const loginUser=(e)=>{

        e.preventDefault();
        if(!userName)return
        fetch(`http://192.168.1.42:8086/todos/${userName}` )
        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                setErrorTextVisibility(true);
                setUserName("");
            return;
            }
      
        
        localStorage.setItem("userName",userName);
        history.push("/learn/user");
        
    })

    }
    if(localStorage.getItem("userName")){
        history.push("/learn/user");
    }



    return (
        <div className="container">
            <h2>Login</h2>
            <form style={{display:"grid",
            gridTemplateColumns :"auto auto",
        justifyContent:"center"}}
        onSubmit={loginUser}>
            <input type="text" 
            value={userName}
            onChange={
                (e)=>{
                    setUserName(e.target.value);
                }
            }
            />
            <button className="user-add" type="submit">login</button>
            </form>
           {errorTextVisibility && <div className="error-text">
            invalid username</div>}
            <div className="link-section">NEW USER then 
            <Link to="/learn/CreateUser">CREATE NEW...
                </Link ></div>

            
        </div>
    )
}

export default  Login
