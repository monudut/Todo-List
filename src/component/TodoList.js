import React from 'react'
import './TodoList.css'
const TodoList=(props)=> {
    
    return (
    <>
    <div className='todo_style'>
        
     <h2 onClick={()=>{
         props.onSelect(props.id)
     }}> -
      </h2>
    <li>{props.val}</li>
    </div>
    </>
    )
}

export default TodoList