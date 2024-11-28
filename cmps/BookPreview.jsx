export function BookPreview({ book }) {
  return (
    <article className='book-preview'>
      <h2>Book Title: {book.title}</h2>
      <h4>description: {book.description}</h4>
      <h4>price: {`${book.amount} ${book.currencyCode}`}</h4>

      {/* <img src={`../assets/img/${book.vendor}.png`} alt="book-image" /> */}
    </article>
  )
}
