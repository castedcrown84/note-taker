import express from 'express'
import { getNotes, createNote, getNote, upDateNote} from '../controllers/notes'

const Router = express.Router()

//Route for getting all Notes
Router.get('/', getNotes)

//Route for getting a single note
Router.get('/:id', getNote)

//Router for creating a Note and adding it to database
Router.post('/post', createNote)

//Route for updating Note
Router.patch('/:id', upDateNote)

export default Router
