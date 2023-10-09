import React, { useEffect, useState } from 'react'
import { Note as NoteModel } from '../models/notes'
import Notes from './Notes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/NotesPage.module.css'

const Home = () => {
  //Since typescript is strictly typed the state has to be defined.
  const [notes, setNotes] = useState<NoteModel[]>([])

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
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes &&
          notes.map((note) => (
            <Col key={note._id}>
              <Notes note={note} className={styles.note} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Home
