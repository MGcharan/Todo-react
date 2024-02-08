import React from 'react'

import Lineitem from './Lineitem';

function Itemlist({item,handleChange,handleDelete}) {
  return (
    <>
    <ul>
        {item.map((value)=>(
         
          <Lineitem
          key={value.id}
          value={value}
          handleChange={handleChange}
          handleDelete={handleDelete}
          />

        ))}
      </ul>
    </>
    
  )
}

export default Itemlist