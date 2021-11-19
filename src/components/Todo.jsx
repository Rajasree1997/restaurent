import React from 'react'

const todo = ({setTodoList,status,text,i,todoList}) => {
    return (
        <li key={i}//todolistle ella element nteyum value index edukkunnu
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
               <div className="todo-edit-button"
                onClick={()=>{
                
                }}/>

               <div className="todo-close-button"
                onClick={()=>{
                setTodoList(todoList.filter((_value,index)=>i!==index//value click cheyyumpo kittunna index ethano ath ozhige
                )
                )
            }}/>
               </li>
    )
}

export default todo

