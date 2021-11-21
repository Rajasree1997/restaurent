import React,{useState,useEffect} from 'react'
import Todo from "./components/Todo"
import postData from './services/postData';

const Learn = ({match,history}) => {
    const user=match.params.user;
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("")
    const [duplicateError,setDuplicateError]=useState(false);
    useEffect(()=>{
        fetch(`http://192.168.1.42:8086/todos/${user}` )
        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                history.push("/learn");
                return;
            
            }
            setTodoList(value[0].todos.map(({text,status})=>{
                return{
                    text,
                    status,
                    isEditMode:false
                }
            }));
        })
    },[]);


    return (
        
        <div className=" container">
        <h2>My To Do List</h2>
        <div className="todo-add">
            <input type="text"  placeholder="Plan Something..." value={todo} onChange={(e)=>{
                setTodo(e.target.value);//todo il type cheyyunna value settodo lekk store aavunnu when click on add new botton
             }}/>
        
        <button className="todo-button" onClick={()=>{
            if(!todo)return 
            //if else can also use
            if(todoList.filter(({text})=>todo.toLowerCase() ===text.toLowerCase()).length){
                setDuplicateError(true);
                setTimeout(() => {
                    setDuplicateError(false);
                }, 1000);
                return
            }
            postData("/todos",
            {
                user,
                todos: [
                   ...todoList.map(({text,status})=>{
                       return{
                           text,status
                       }
                   }),
                  {
                    text: todo,
                    status: false
                  }
                ]
              })
            setTodoList(prev=>[...prev,{text:todo,status:false,isEditMode:false}]);//previously ulla list settpdplistlekk vakkunnu plus puthiyathum add aavunnu
            setTodo("")//add cheyda sesham type cheyyunna place empty aavan

        } }> ADD NEW
        </button>
        {duplicateError && <div className="duplicate-error">
            ALREADY EXISTS..

            </div>}
        </div>
        <div className="todo-content">
        
        <ul>
            
        {todoList.map((data,i)=>
        <Todo
        {...data}
        key={i} i={i}
        setTodoList={setTodoList}
        todoList={todoList}
        user={user}/>
               )}

        </ul>
        </div>
        </div>
        
        
      
    )
}

export default Learn
