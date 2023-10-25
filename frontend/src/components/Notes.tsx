import { Note as NoteModel } from '../models/notes'
import Card from 'react-bootstrap/Card'
import styles from '../styles/note.module.css'
import { formatDate } from '../utils/formatDate'
import {MdDelete} from 'react-icons/md'
import styleUtils from '../styles/utils.module.css'
interface NoteProps {
  note: NoteModel,
  className?: string,
  onDeleteNoteClicked:(note: NoteModel) => void
}
/* since the paramaters are annotaed with NoteProps, whatever is defined in the NoteProps interface is going to be expected 
to be passed in the parent component  */
const Notes = ({ note, className, onDeleteNoteClicked }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note

  let createdUpdatedText: string
  if (updatedAt > createdAt) {
    createdUpdatedText = 'Updated: ' + formatDate(updatedAt)
  } else {
    createdUpdatedText = 'Created: ' + formatDate(createdAt)
  }

  return (
    <div>
      <Card className={`${styles.noteCard} ${className}`}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styleUtils.flexCenter} >{title}<MdDelete 
          className='text-muted ms-auto'
          onClick={(e)=>{
            onDeleteNoteClicked(note)
            e.stopPropagation()
          }}
          /></Card.Title>
          <Card.Text className={styles.cardText}>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{createdUpdatedText} </Card.Footer>
      </Card>
    </div>
  )
}

export default Notes
