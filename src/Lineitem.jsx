import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Lineitem({value,handleChange,handleDelete}) {
  return (
    <>
    <li className='item' key={value.id}>
            <input 
            type="checkbox"
            onChange={()=>handleChange(value.id)}
            checked={value.checked}
             />
             <label 
             style={(value.checked)?{textDecoration:'line-through'}:null}
              onDoubleClick={()=>handleChange(value.id)} >{value.item}</label>
             <FaTrashAlt
             role='button'
             onClick={()=>handleDelete(value.id)}
             tabIndex={0}
             aria-label={`Delete ${value.value
            
            }`}
             
             />
          </li>
    </>
  )
}

export default Lineitem