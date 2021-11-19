import React,{useState} from 'react'
import Todo from "./components/Todo"

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("")
    return (
        
        <div className=" container">
        <h2>My To Do List</h2>
        <div className="todo-add">
            <input type="text"  placeholder="Plan Something..." value={todo} onChange={(e)=>{
                setTodo(e.target.value);//todo il type cheyyunna value settodo lekk store aavunnu when click on add new botton
             }}/>
        
        <button className="todo-button" onClick={()=>{
            if(!todo)return //if else can also use
            setTodoList(prev=>[...prev,{text:todo,status:false}]);//previously ulla list settpdplistlekk vakkunnu plus puthiyathum add aavunnu
            setTodo("")//add cheyda sesham type cheyyunna place empty aavan

        } }> ADD NEW</button>
        </div>
        <div className="todo-content">
        
        <ul>
            
        {todoList.map((data,i)=>
        <Todo
        {...data}
        key={i} i={i}
        setTodoList={setTodoList}
        todoList={todoList}/>
               )}

        </ul>
        </div>
        </div>
        
        
      
    )
}

export default Learn
