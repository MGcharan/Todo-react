// eslint-disable-next-line no-unused-vars

import   "./Content.css";
import Itemlist from "./Itemlist";

function Content({item,handleChange,handleDelete}) {
  
  return (
    <div className='main'>
       {(item.length)?( 
        <Itemlist
        item={item}
    
     handleChange={handleChange}
     handleDelete={handleDelete}
        
        />
        ) :(
          <p style={{marginTop:'10rem'}}>Your list is empty</p>
        )
      } 
    </div>
  )
}

export default Content