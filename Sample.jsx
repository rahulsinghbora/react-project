import React, { useState } from 'react'

const Sample =({details, increase,deletes})=>{
 
   

   return(
      <>
          <div className='main_div' >
                 <p>firstname:{details.firstname} </p> 
                <p>lastname:{details.lastname}</p>  
                <p> age:{details.age}</p> 
                <p>id:{details.id}</p> 
                <button onClick={()=>{increase(details.id)}} > increase age</button>
                <button onClick={()=>{deletes(details.id)}}>delete</button>
                </div>
      </>
   )
}
 export default Sample