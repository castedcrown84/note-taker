import express from 'express'
import { getNotes, createNote, getNote} from '../controllers/notes'

const Router = express.Router()

//Route for getting all Notes
Router.get('/', getNotes)

//Route for getting a single note
Router.get('/:id', getNote)

//Router for creating a Note and adding it to database
Router.post('/post', createNote)

export default Router
