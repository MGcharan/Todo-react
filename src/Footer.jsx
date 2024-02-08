// eslint-disable-next-line no-unused-vars
import React from 'react'

function Footer({length}) {
    
  return (
    <div className='footer'>
      {length} List {length ===1 ?"Item":"Items"}
        {/* Copyright:&copy; 2023 */}
    </div>
  )
}

export default Footer