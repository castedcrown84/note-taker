import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Note } from '../models/notes'
import { NoteInput } from '../network/notes_api'
import { useForm } from 'react-hook-form'
import * as NotesAPI from '../network/notes_api'

interface AddNoteDialogProps {
  onDismiss: () => void
  onNoteSaved: (note: Note) => void
}

const AddNote = ({ onDismiss, onNoteSaved }: AddNoteDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>()

  const notePost = async (input: NoteInput) => {
    try {
      const noteResponse = await NotesAPI.createNote(input)
      onNoteSaved(noteResponse)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal show onHide={()=>onDismiss()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addNoteForm" onSubmit={handleSubmit(notePost)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              isInvalid={!!errors.title}
              {...register('title', { required: 'Required' })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Text"
              {...register('text')}
            />
            <Form.Control.Feedback>
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button form="addNoteForm" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNote
