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

  // console.log('book:', book)
  // console.log('Render');

  if (!book) return <div>Details Loading...</div>
  return (
    <section className='book-details'>
      <h1>Book Titile: {book.title}</h1>
      <h1>Price: {book.amount}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
        fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti
        veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita,
        architecto omnis?
      </p>
      <img
        src={`../assets/img/${book.title.replace(/\s/g, '')}.jpg`}
        alt='book-image'
        width='400px'
      />
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
