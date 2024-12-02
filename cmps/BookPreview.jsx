export function BookPreview({ book }) {
  return (
    <article className='book-preview'>
      <h2>Book Title: {book.title}</h2>
      <h4>Description: {book.description}</h4>
      <h4>
        Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`}
      </h4>
      <h4>On Sale: {`${book.listPrice.isOnSale ? 'Yes' : 'No'}`}</h4>
      {/* <img
        src={`../assets/img/${book.title.replace(/\s/g, '')}.jpg`}
        alt='book-image'
        width='8%'
      /> */}
    </article>
  )
}
