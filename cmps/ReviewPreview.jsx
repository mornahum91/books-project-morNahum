export function ReviewPreview({ reviews, removeReview = '' }) {
  return (
    <div className='reviews-preview'>
      <h1>Reviews</h1>

      {reviews.length === 0 ? (
        <h4>There are no reviews yet.</h4>
      ) : (
        reviews.map((review) => (
          <div className='item-preview' key={review.id}>
            <h4>Name: {review.fullName}</h4>
            <h4>Rating: {review.rating}</h4>
            <h4> Read at: {review.readAt}</h4>
            {/*
              <button className='red' onClick={() => removeReview(review.id)}>X</button> 
              */}
          </div>
        ))
      )}
    </div>
  )
}
