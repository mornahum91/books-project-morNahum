import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
  const [book, setBook] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
  }, [params.bookId])

  function loadBook() {
    bookService
      .get(params.bookId)
      .then(setBook)
      .catch((err) => {
        console.log('Problem getting book', err)
      })
  }

  function onBack() {
    navigate('/book')
    // navigate(-1)
  }

  function getBookDifficulty(pages) {
    if (pages > 500) return 'Serious Reading'
    else if (pages > 200) return 'Descent Reading'
    else if (pages < 100) return 'Light Reading'
  }

  if (!book) return <div>Details Loading...</div>

  return (
    <section className='book-details'>
      <h1>Book Titile: {book.title}</h1>
      <h1>
        Price: {book.listPrice.amount} {book.listPrice.currencyCode}
      </h1>
      <p>{book.description}</p>
      <h4>{getBookDifficulty(book.pageCount)}</h4>
      {/* <img
        src={`../assets/img/${book.title.replace(/\s/g, '')}.jpg`}
        alt='book-image'
        width='400px'
      /> */}
      <button onClick={onBack}>Back</button>
      <section>
        <button>
          <Link to={`/book/${book.prevBookId}`}>Prev Book</Link>
        </button>
        <button>
          <Link to={`/book/${book.nextBookId}`}>Next Book</Link>
        </button>
      </section>
    </section>
  )
}
