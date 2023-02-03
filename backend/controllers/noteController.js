const Note = require('../models/noteModel')
const mongoose = require('mongoose')

const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 })
  res.status(200).json(notes)
}

const getOneNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Note not found' })
  }

  const note = await Note.findById(id)

  if (!note) {
    return res.status(404).json({ error: 'Note not found' })
  }
  res.status(200).json(note)
}

const createNote = async (req, res) => {
  const { title, content, priority, completed, category } = req.body
  // add doc to db
  try {
    const note = await Note.create({
      title,
      content,
      priority,
      completed,
      category,
    })
    res.status(200).json(note)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Note not found' })
  }

  const note = await Note.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )

  if (!note) {
    return res.status(404).json({ error: 'Note not found' })
  }

  res.status(200).json(note)
}

const deleteNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Note not found' })
  }

  const note = await Note.findByIdAndDelete({ _id: id })

  if (!note) {
    return res.status(400).json({ error: 'Note not found' })
  }

  res.status(200).json(note)
}

module.exports = { getAllNotes, createNote, getOneNote, updateNote, deleteNote }
