import React, { useEffect, useState } from 'react'
import { Note as NoteModel } from './models/notes'
import Notes from './components/Notes'
import { Container, Row } from 'react-bootstrap'

const App = () => {
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
      <Row xs={1} md={2} xl={3}>
        {notes && notes.map((note) => <Notes note={note} key={note._id} />)}
      </Row>
    </Container>
  )
}

export default App
