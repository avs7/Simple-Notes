const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    priority: {
      type: Boolean,
      required: false,
    },
    completed: {
      type: Boolean,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Note', noteSchema)
