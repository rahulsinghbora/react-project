import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: ""
  })
  const inputevent = (event) => {
    const { name, value } = event.target;

    setnote((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const addEvent=()=>{
     props.passnote(note)
  
   setnote({
    title: "",
    content: ""
   })
  }

  
  return (
    <>
      <div className='main_note'>
        <form>
          <input type="text" placeholder='Title' autoComplete='off' name="title" value={note.title} onChange={inputevent} />

          <textarea rows="10" column="10" placeholder='enter text...' name="content" value={note.content} onChange={inputevent}></textarea>

          <Button onClick={addEvent} className="addbtn" variant="outlined"> <AddIcon /> </Button>

        </form>
      </div>
    </>
  )
}
export default CreateNote;