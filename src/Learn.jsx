import React,{useState} from 'react'

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("")
    return (
        
        <div className=" container">
        <h2>My To Do List</h2>
        <div className="todo-add">
            <input type="text"  placeholder="Add new..." value={todo} onChange={(e)=>{
                setTodo(e.target.value);//todo il type cheyyunna value settodo lekk store aavunnu when click on add new botton
             }}/>
        
        <button className="todo-button" onClick={()=>{
            if(!todo)return 
            setTodoList(prev=>[...prev,{text:todo,status:false}]);//previously ulla list settpdplistlekk vakkunnu plus puthiyathum add aavunnu
            setTodo("")//add cheyda sesham type cheyyunna place empty aavan

        } }> ADD NEW</button>
        </div>
        <div className="todo-content">
        
        <ul>
            
        {todoList.map(({text,status},i)=><li key={i}//todolistle ella element nteyum value index edukkunnu
            ><div className={`circle ${status? "circle--active":""}`}
            onClick={
                ()=>{
                    setTodoList(
                        prev=>{
                            
                                let newTodoList=[...prev];//copy the list
                                let newTodo={...newTodoList[i]};//copy the elements of the list
                                newTodo.status=!newTodo.status;
                                newTodoList[i]=newTodo;
                                return newTodoList;
                              })
                            }}
            
            
            
            />


               <div className="todo-text"> {text}
               </div>
               <div className="todo-close-button"
                onClick={()=>{
                setTodoList(todoList.filter((_value,index)=>i!==index//value click cheyyumpo kittunna index ethano ath ozhige
                )
                )
            }}/>
               </li>
               )}

        </ul>
        </div>
        </div>
        
        
      
    )
}

export default Learn
