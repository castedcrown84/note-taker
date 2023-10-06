import { Note as NoteModel } from "../models/notes";
import { Card } from "react-bootstrap";

interface NoteProps{
    note: NoteModel
}


const Notes = ({note}: NoteProps) => {
    return ( <div>
    <Card>
    <Card.Body>
        <Card.Title>
            {note.title}
        </Card.Title>
    </Card.Body>
    </Card>

    </div> );
}
 
export default Notes;