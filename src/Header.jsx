// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header({name}) {
    
  return (
    <div className='header'>
        <h1>{name}</h1>
    </div>
  )
}
Header.defaultProps={
  name:"Todo-list"
}

export default Header