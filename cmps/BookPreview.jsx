export function BookPreview({ book }) {
  return (
    <article className='book-preview'>
      <h2>
        Book Title: {book.title}{' '}
        {book.listPrice.isOnSale && (
          <img src={`../assets/img/sale.png`} alt='sale' width='4%' />
        )}
      </h2>
      <h4>Description: {book.description}</h4>
      <h4>
        {/* Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`} */}
      </h4>
      <h4></h4>
    </article>
  )
}
