import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

const { Link } = ReactRouterDOM

const { useEffect, useState } = React

export function BookIndex() {
  const [books, setBooks] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    showSuccessMsg('Cars loaded successfully!')

    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService
      .query(filterBy)
      .then((books) => {
        setBooks(books)
        showSuccessMsg('Cars loaded successfully!')
      })
      // .then(setBooks)
      .catch((err) => {
        console.log('Problems getting books:', err)
      })
  }

  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then(() => {
        setBooks((books) => books.filter((book) => book.id !== bookId))
      })
      .catch((err) => {
        console.log('Problems removing book:', err)
      })
  }

  function onSetFilter(filterBy) {
    setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
  }

  if (!books) return <div>Loading...</div>
  return (
    <section className='book-index'>
      <BookFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />
      {/* <section>
        <Link to='/book/edit'>Add Book</Link>
      </section> */}

      <BookList books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
