import { useState } from "react";


const  Login= ({history}) => {
    const [userName,setUserName] = useState("");
    const loginUser=(e)=>{

        e.preventDefault();
        if(!userName)return
        
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
        </div>
    )
}

export default  Login
