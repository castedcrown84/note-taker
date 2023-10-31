import React, { useEffect, useState } from 'react'
import { Note as NoteModel } from '../models/notes'
import Notes from './Notes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from '../styles/NotesPage.module.css'
import stylesUtils from '../styles/utils.module.css'
import AddNote from './addNote'
import * as NotesApi from '../network/notes_api'
import {FaPlus} from "react-icons/fa"

const Home = () => {
  //Since typescript is strictly typed the state has to be defined.
  const [notes, setNotes] = useState<NoteModel[]>([])
  const [showAddNoteDialog, setShowAddNoteDialog] = useState<boolean>(false)

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes()
        setNotes(notes)
      } catch (error) {
        console.error(error)
      }
    }
    loadNotes()
  }, [])

  async function deleteNote(note: NoteModel) {
    try {
      await NotesApi.deleteNote(note._id)
      setNotes(notes.filter((existingNote) => existingNote._id !== note._id))
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return (
    <Container>
      <Button
        className={`mb-4 ${stylesUtils.blockCenter} ${stylesUtils.flexCenter}`}
        onClick={() => {
          setShowAddNoteDialog(true)
        }}
      >
        <FaPlus/>
        Add New Note
      </Button>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes &&
          notes.map((note) => (
            <Col key={note._id}>
              <Notes
                note={note}
                className={styles.note}
                onDeleteNoteClicked={deleteNote}
              />
            </Col>
          ))}
      </Row>
      {showAddNoteDialog && (
        <AddNote
          //onDismiss is a Modal feature
          onDismiss={() => setShowAddNoteDialog(false)}
          onNoteSaved={(newNote) => {
            //this is so that what ever get posted the database  automatically renders on the front end
            setNotes([...notes, newNote])
            //This closes the dialog
            setShowAddNoteDialog(false)
          }}
        />
      )}
    </Container>
  )
}

export default Home
