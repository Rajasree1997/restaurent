import {useState} from 'react'

const TodoList = () => {
    const [task,setTask]=useState("")
    const [taskList,setTaskList]=useState([])
    return (
        <div>
            <input type="text" placeholder="Add something New" value={task}
             onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>{setTaskList(prev=>[...prev,task])
        setTask("")
        }
        
    }
        
        >ADD</button>
<ul>
    {taskList.map((value,i)=>
    <li key={i} 
    onClick={()=>{
        setTaskList(taskList.filter((_value,index)=>i !==index))}}>

   {value}</li>)}
</ul>

        </div>
        
    )
}

export default TodoList
