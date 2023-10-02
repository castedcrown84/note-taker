import { RequestHandler } from 'express'
import Notes from '../models/note'
import mongoose from 'mongoose'

//controller function that gets all notes
const getNotes: RequestHandler = async (req, res) => {
  try {
    const notes = await Notes.find()

    res.status(200).json(notes)
  } catch (err) {
    console.log(err)
  }
}

//controller function that creates notes and adds it to the database
const createNote: RequestHandler = async (req, res) => {
  try {
    const note = await Notes.create(req.body)

    if (!note) {
      throw new Error('Needs valid input')
    }
    res.status(200).json(note)
  } catch (error) {
    console.log(error)
  }
}

//controller function for getting a single note
const getNote: RequestHandler = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id)

    if (!note) {
      throw new Error('note not found')
    }
    res.status(200).json(note)
  } catch (error) {
    console.log(error)
  }
}

const upDateNote:RequestHandler = async (req, res) => {
  
  const id = req.params.id
  const newTitle = req.body.title
  const newText = req.body.text

  try {

    if( !mongoose.isValidObjectId(id)){
      throw new Error("invalid Id")
    }
    if(!newTitle){
      throw new Error("Note must have a title")
    }

    const note = await Notes.findById(id)
    if(!note){
      throw new Error('Note not found')
    }

    note.title = newTitle;
    note.text = newText;

    const upDatedNotes = await note.save();

    res.status(200).json(upDatedNotes)
    
  } catch (error) {
    console.log(error)
  }
}

export { getNotes, createNote, getNote, upDateNote}
