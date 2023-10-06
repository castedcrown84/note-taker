import React, { useEffect, useState } from 'react'
import './App.css'
import {Note as NoteModel} from './models/notes'
import Notes from './components/Notes'


const App = () => {
  const [notes, setNotes] = useState<NoteModel[]>([])

  useEffect(() => {
    fetch('/apiroute', { method: 'GET' })
      .then((res) => {
        if(!res.ok){
          throw new Error('Cannot fetch')
        }
        return res.json()
      })
      .then((data) => {
        setNotes(data)
       
      }).catch((error) => {
        console.log(error)
      })
  },[])

  return(
  <div className="app">
    {
    notes && notes.map(note => (
    <Notes note={note} key={note._id}/>
    ))}
  </div>

   )}

export default App
