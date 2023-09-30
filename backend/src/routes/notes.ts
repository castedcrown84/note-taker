import express from 'express'
import { getNotes, createNotes } from "../controllers/notes";

const Router = express.Router()

//Route for getting all Notes
Router.get('/', getNotes)

//Router for creating a Note and adding it to database
Router.post('/post', createNotes)

export default Router