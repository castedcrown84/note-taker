import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface AddNoteProps {
  onDismiss: () => void
}

const AddNote = ({ onDismiss }: AddNoteProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="text" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNote
