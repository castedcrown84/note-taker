import { Note as NoteModel } from '../models/notes'
import Card from 'react-bootstrap/Card'
import styles from '../styles/note.module.css'
import { formatDate } from '../utils/formatDate'

interface NoteProps {
  note: NoteModel
  className?:string
}

const Notes = ({ note, className}:NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;


  let createdUpdatedText:string;
  if(updatedAt > createdAt){
    createdUpdatedText = "Updated: " + formatDate(updatedAt)
  }else{
    createdUpdatedText = "Created: " + formatDate(createdAt)
  }

  return (
    <div>
      <Card className={`${styles.noteCard} ${className}`}>
        <Card.Body className={styles.cardBody} >
          <Card.Title className={styles.cardText}>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>{createdUpdatedText} </Card.Footer>
      </Card>
    </div>
  )
}

export default Notes
