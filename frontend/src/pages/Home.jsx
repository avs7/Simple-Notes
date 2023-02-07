import { useState, useEffect } from 'react'
import axios from 'axios'
import Notes from '../components/Notes'
import EmptyNotes from './EmptyNotes'

const Home = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios
      .get('/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {/* {!notes && <EmptyNotes />} */}
      <Notes notes={notes} />
    </>
  )
}
export default Home
