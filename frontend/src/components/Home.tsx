import React, { useEffect, useState } from 'react'
import { Note as NoteModel } from '../models/notes'
import Notes from './Notes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Button from 'react-bootstrap/Button'
import styles from '../styles/NotesPage.module.css'
import AddNote from './addNote'



const Home = () => {
  //Since typescript is strictly typed the state has to be defined.
  const [notes, setNotes] = useState<NoteModel[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)


  useEffect(() => {
    fetch('/apiroute', { method: 'GET' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Cannot fetch')
        }
        return res.json()
      })
      .then((data) => {
        setNotes(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Container>
      <Button onClick={()=> {
        setShowDialog(true)
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
        showDialog && <AddNote onDismiss={() =>setShowDialog(false)}/>
      }
    </Container>
  )
}

export default Home
