import { RequestHandler } from 'express'
import Notes from '../models/note'

const getNotes: RequestHandler = async (req, res) => {
  try {
    const notes = await Notes.find()
    res.status(200).json(notes)
  } catch (err) {
    console.log(err)
  }
}

const createNotes: RequestHandler = async (req, res) => {
  try {
    const notes = await Notes.create(req.body)
    res.status(200).json(notes)
  } catch (error) {
    console.log(error)
  }
}

export { getNotes, createNotes }
