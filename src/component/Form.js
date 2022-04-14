import React,{useState} from 'react'
import './Form.css'
import TodoList from './TodoList'
function Form() {
  const [text,setText]=useState('')
  const [sub,setSub]=useState([])
 
  const inputHandler=(event)=>{
      setText(event.target.value)
  }

  const submitHandler=(event)=>{
      setSub((oldItems)=>{
        return [...oldItems,text];
      })
      setText('')
  }

  const deleteHandler=(id)=>{
    console.log("delte")
    console.log("id1 "+id);
    setSub((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        console.log("index" +index)
        console.log("id2" +id)
         return index!==id;
      })
    })

}

  return (
    <div className='main-div'>
      <div className='center-div'><br></br>
       <h1>ToDo-List</h1><br></br>
       <input type="text" placeholder='Add a items' onChange={inputHandler} value={text}></input>
       <button onClick={submitHandler}>+</button>

     <ol>
        {sub.map((itemValue,index)=>{
          return <TodoList 
          key={index} 
          val={itemValue} 
          id={index}
          onSelect={deleteHandler}
          />
        })}
       </ol> 
      </div>
    </div>
  )
}

export default Form