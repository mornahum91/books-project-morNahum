const { useEffect, useState } = React
import { reviewService } from '../services/review.service.js'

export function AddReview({ addToReviews, bookId }) {
  const [review, setReview] = useState({
    fullName: '',
    rating: '',
    readAt: '',
    bookId,
  })

  const [rating, setRating] = useState(5) // Initial rating set to 3

  // const handleRatingChange = (event) => {
  //   setRating(parseInt(event.target.value, 10))
  // }

  function onSaveReview(ev) {
    ev.preventDefault()
    addToReviews(review)
  }

  function handleChange({ target }) {
    let { value, name: field } = target
    switch (target.type) {
      case 'range':
        setRating(parseInt(event.target.value, 10))
      case 'number':
        value = +target.value
        break
      case 'checkbox':
        value = target.checked
        break
    }

    setReview((prevReview) => ({ ...prevReview, [field]: value }))
  }

  return (
    <section className='add-review'>
      <h2>Add Review </h2>
      <form onSubmit={onSaveReview}>
        <label htmlFor='fullName' onChange={handleChange}>
          Full Name
        </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='rating'>Rating</label>
        <input
          type='range'
          min='1'
          max='5'
          name='rating'
          id='rating'
          value={rating}
          onChange={handleChange}
        />
        <span>{rating}</span> {/* Display the current rating value */}
        <br />
        <br />
        <label htmlFor='readAt'>Read At</label>
        <input type='date' name='readAt' id='readAt' onChange={handleChange} />
        <button> Submit </button>
        <br />
      </form>
    </section>
  )
}
