import { Note as NoteModel } from '../models/notes'
import { Card } from 'react-bootstrap'
import styles from '../styles/note.module.css'

interface NoteProps {
  note: NoteModel
}

const Notes = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note

  return (
    <div>
      <Card className={styles.noteCard}>
        <Card.Body >
          <Card.Title className={styles.cardText}>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Footer>{createdAt} {updatedAt}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Notes
