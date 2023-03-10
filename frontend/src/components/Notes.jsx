export default function Notes({ notes }) {
  return (
    <ul role='list' className=' divide-gray-200 mt-10 w-1/2 mx-auto'>
      {console.log(notes)}
      {notes.map(note => (
        <li
          key={note._id}
          className='relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50 max-w-3xl'>
          <div className='flex justify-between space-x-3'>
            <div className='min-w-0 flex-1'>
              <a href='#' className='block focus:outline-none'>
                <span className='absolute inset-0' aria-hidden='true' />
                <p className='truncate text-sm font-medium text-gray-900'>
                  {note.category}
                </p>
                <p className='truncate text-sm text-gray-500'>
                  {note.priority}
                </p>
              </a>
            </div>
            <time
              dateTime={note.updatedAt}
              className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'>
              {note.createdAt}
            </time>
          </div>
          <div className='mt-1'>
            <p className='text-sm text-gray-600 line-clamp-2'>
              {note.content}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
