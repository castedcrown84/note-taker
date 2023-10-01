import { RequestHandler } from 'express'
import Notes from '../models/note'

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
      throw Error('Needs valid input')
    }
    res.status(200).json(note)
  } catch (error) {
    console.log(error)
  }
}

const getNote: RequestHandler = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id)

    if (!note) {
      throw Error('note not found')
    }
    res.status(200).json(note)
  } catch (error) {
    console.log(error)
  }
}

export { getNotes, createNote, getNote }
