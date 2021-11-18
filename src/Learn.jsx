import React,{useState} from 'react'

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("")
    return (
        
        <div>
        <h2>My To Do List</h2>
        <div className="todo-add">
            <input type="text"  placeholder="Add new..." value={todo} onChange={(e)=>{
                setTodo(e.target.value);//todo il type cheyyunna value settodo lekk store aavunnu when click on add new botton
             }}/>
        
        <button onClick={()=>{ 
            setTodoList(prev=>[...prev,todo]);
            setTodo("")//add cheyda sesham type cheyyunna place empty aavan

        } }> ADD NEW</button>
        <div className="todo-content">

        <ul>
        {todoList.map((value,i)=><li key={i}
            onClick={()=>{
                setTodoList(todoList.filter((_value,index)=>i!==index
                )
                )
            }}>
                {value}</li>)}
        </ul>
        </div>
        </div>
        </div>
      
    )
}

export default Learn
