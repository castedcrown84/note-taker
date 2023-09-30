import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import env from './util/validateEnv'
import Notes from './models/note'

const app = express()
const PORT = process.env.port || 8001

//For post request. They allow the request body to work
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Gets all the notes
app.get('/', async (req, res) => {
  //Try catch is essentially for handeling errors
  try {
    const notes = await Notes.find()
    res.status(200).json(notes)
  } catch (error) {
    console.log(error)
  }
})
//Creates a note

app.post('/post', async (req, res) => {
  try {
    const notes = await Notes.create(req.body)
    res.json(notes)
  } catch (error) {
    console.log(error)
  }
})
// Connects to database
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose Connected')
    app.listen(8000, () => {
      console.log(`Listening to app on port ${PORT}`)
    })
  })
  .catch(() => {
    console.log('failed to fetch')
  })
//shift alt f alighns code
