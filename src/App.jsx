import Addform from "./Addform";
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import React, { useState } from 'react'


function App() {
const[item, setItem]=useState([

      {
        id:1,
        checked:"",
        item:"Learning React"
      },
      
      {
        id:2,
        checked:"",
        item:"watching Guvi video"
      },
      
      {
        id:3,
        checked:"",
        item:"Watching movies"
      } 
  
    ]);

const [newItem,setNewItem]=useState("")






  function handleChange(id){
    const listItem=item.map((items)=>(
      items.id===id?{...items,checked:!items.checked}:items))
      setItem(listItem)
      localStorage.setItem("todo-list",JSON.stringify({listItem}))
  }
  
  function handleDelete(id){
    const listItem=item.filter((item)=>(
      item.id!==id))
    setItem(listItem)
    localStorage.setItem("todo-list",JSON.stringify({listItem}))    
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;
   console.log(newItem)
  setNewItem("")
}

  return (

    <div className="App">
     <Header name='Giri Todo-list'></Header>
     <Addform
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}
     />
  
     <Content
     item={item}
    
     handleChange={handleChange}
     handleDelete={handleDelete}
     
     />
     <Footer length={item.length}></Footer>
     </div>
  );
}

export default App
