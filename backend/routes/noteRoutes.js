const express = require('express')
const {
  getAllNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteController')

const router = express.Router()

router.get('/', getAllNotes)
router.get('/:id', getOneNote)
router.post('/', createNote)
router.patch('/:id', updateNote)
router.delete('/:id', deleteNote)

module.exports = router
