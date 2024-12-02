export function BookPreview({ book }) {
  return (
    <article className='book-preview'>
      <h2>Book Title: {book.title}</h2>
      <h4>Description: {book.description}</h4>
      <h4>Price: {`${book.amount} ${book.currencyCode}`}</h4>
      <h4>On Sale: {`${book.isOnSale ? 'Yes' : 'No'}`}</h4>
      <img
        src={`../assets/img/${book.title.replace(/\s/g, '')}.jpg`}
        alt='book-image'
        width='8%'
      />
    </article>
  )
}
