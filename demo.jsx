import React, { useState } from 'react'
import Header from './header demo'
import Footer from './footer demo '
import CreateNote from './Createnote demo'
import Note from './note demo' 


const Demo =()=>{
  const[additem,setadditem]=useState([])

  const addnote=(note)=>{
    setadditem((prev)=>{
      return[ ...prev,note];
    })
  }

  const ondelete=(id)=>{
    setadditem((prev)=>
      prev.filter((currdata,index)=>{
        return index !== id
      })
    )
  }
  

  return(
    <>
    <Header/>
    <CreateNote passnote={addnote}/>
    {  additem.map((notes,index)=>{
      return (  <Note
        key={index}
        id={index}
        title={notes.title}
        content={notes.content}
        deleteitem={ondelete}
         />
      )
    })
    }

    <Footer/>

    </>
  )
}
export default Demo;