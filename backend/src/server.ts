import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import env from './util/validateEnv'
import apiRoutes from './routes/notes'


const app = express()
const PORT = process.env.port || 8001

//For post request. They allow the request body to work
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/apiroute', apiRoutes)


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
