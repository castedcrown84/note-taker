import { Schema, model } from 'mongoose'

const noteSchema = new Schema({
  title: {
    type: String,
    required: 'You need to add a title',
  },
  text: {
    type: String,
  },
},

{timestamps:true}

)

const Notes = model('Note', noteSchema)


export default Notes