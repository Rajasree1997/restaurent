import React, { useState } from 'react'
import postData from '../services/postData';

const Todo = ({setTodoList,status,text,i,todoList,isEditMode,user}) => {
    const[editText,setEditText]=useState(text);
    const[errorTextVisibility,setErrorTextVisibility]=useState(false)
    const [duplicateError,setDuplicateError]=useState(false);
    return (
        <li key={i}//todolistle ella element nteyum value index edukkunnu
            ><div className={`circle ${status? "circle--active":""}`}
            onClick={
                ()=>{
                    postData("/todos",
                            {
                                user,
                                todos: [
                                   ...todoList.map(({text,status},index)=>{
                                       if(i=== index){
                                       return{
                                           text,
                                           status: !status
                                       }
                                   }
                                  return{
                                    text,
                                    status
                                  }
                                  })
                                ]
                              });
                    setTodoList(
                        prev=>{
                            
                                let newTodoList=[...prev];//copy the list
                                let newTodo={...newTodoList[i]};//copy the elements of the list
                                newTodo.status=!newTodo.status;
                                newTodoList[i]=newTodo;
                                return newTodoList;
                              })
                            }}
            
            
            
            />{
                isEditMode?
                <>
                <div className ="todo-edit-text-container">
                    <input type="text" className="todo-edit-text-field"
                    value={editText}
                    onChange={(e)=>{
                        setEditText(e.target.value);
                    }}
                    
                    
                    />
                    <div className="todo-edit-cancel-button"
                    onClick={
                        ()=>{
                            setTodoList(
                                prev=>{
                                    
                                        let newTodoList=[...prev];//copy the list
                                        let newTodo={...newTodoList[i]};//copy the elements of the list
                                        newTodo.isEditMode=false;
                                        newTodoList[i]=newTodo;
                                        return newTodoList;
                                      })
                                    }}/>
                                    {errorTextVisibility && <div className="todo-error-text">
                                        <hi>OOPS...!</hi>Please enter something....!</div>

                                    }
                                    {duplicateError && <div className="todo-error-text">
                                        ALREADY EXISTS..

                                    </div>}         
                    </div>
                    <div className="todo-edit-save-button"
                    onClick={
                        
                        ()=>{
                            if(!editText)
                            {
                                setErrorTextVisibility(true);
                                setTimeout(() => {setErrorTextVisibility(false);
                                    
                                }, 1500)
                                return
                            }
                            if(text!==editText && todoList.filter(({text})=>text.toLowerCase() ===editText.toLowerCase()).length){
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
                                   ...todoList.map(({text,status},index)=>{
                                       if(i=== index){
                                       return{
                                           text:editText,status
                                       }
                                   }
                                  return{
                                    text,
                                    status
                                  }
                                  })
                                ]
                              });
                            setTodoList(
                                prev=>{
                                    
                                        let newTodoList=[...prev];//copy the list
                                        let newTodo={...newTodoList[i]};//copy the elements of the list
                                        newTodo.isEditMode=false;
                                        newTodo.text= editText;
                                        newTodoList[i]=newTodo;
                                        return newTodoList;
                                      })
                                    }}/>
                    </>
                    :
                <>
            


               <div className="todo-text"> {text}
               </div>
               <div className="todo-edit-button"
               onClick={
                ()=>{
                    if(todoList.filter(({isEditMode})=>isEditMode).length)return;
                    setTodoList(
                        prev=>{
                            
                                let newTodoList=[...prev];//copy the list
                                let newTodo={...newTodoList[i]};//copy the elements of the list
                                newTodo.isEditMode=true;
                                newTodoList[i]=newTodo;
                                return newTodoList;
                              })
                            }}/>
                
            </>}

               <div className="todo-close-button"
                onClick={()=>{
                    postData("/todos",
                    {
                        user,
                        todos:todoList.filter((_value,index)=>i!==index//value click cheyyumpo kittunna index ethano ath ozhige
                            )
                    });
                setTodoList(todoList.filter((_value,index)=>i!==index//value click cheyyumpo kittunna index ethano ath ozhige
                )
                )
            }}/>
               </li>
    )
}

export default Todo

