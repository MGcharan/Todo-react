import React from 'react'
import { FaPlus } from 'react-icons/fa'

function Addform({newItem,setNewItem,handleSubmit}) {
  return (
    <>
    <form className='addForm' onSubmit={handleSubmit}>
        <input
        autoFocus
        id='addItem'
         type="text"
         placeholder='AddItem'
         required
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}

         />

         <button type='submit'>
            <FaPlus/>
         </button>
    </form>
    </>
  )
}

export default Addform