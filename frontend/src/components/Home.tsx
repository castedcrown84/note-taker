import React, { useEffect, useState } from 'react'
import { Note as NoteModel } from '../models/notes'
import Notes from './Notes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Button from 'react-bootstrap/Button'
import styles from '../styles/NotesPage.module.css'
import AddNote from './addNote'
import * as NotesApi from '../network/notes_api'



const Home = () => {
  //Since typescript is strictly typed the state has to be defined.
  const [notes, setNotes] = useState<NoteModel[]>([])
  const [showAddNoteDialog, setShowAddNoteDialog] = useState<boolean>(false)
  

useEffect(()=> {

  async function loadNotes(){
    try{
      const notes = await NotesApi.fetchNotes();
      setNotes(notes)
    }catch(error){

      console.error(error)
    }
  }
  loadNotes();
}, [])

  return (
    <Container>
      <Button onClick={()=> {
        setShowAddNoteDialog(true)
      }}>Add New Note</Button>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes &&
          notes.map((note) => (
            <Col key={note._id}>
              <Notes note={note} className={styles.note} />
            </Col>
          ))}
      </Row>
      {
       showAddNoteDialog && <AddNote />
      }
    </Container>
  )
}

export default Home
