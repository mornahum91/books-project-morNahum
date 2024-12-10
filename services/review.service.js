import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const REVIEWS_KEY = 'reviewsDB'

export const reviewService = {
  query,
  post,
  remove,
}

async function query(bookid) {
  const reviews = await storageService.query(REVIEWS_KEY)
  if (!reviews || reviews.length === 0) {
    return []
  }
  return reviews.filter((review) => String(review.bookId) === String(bookid))
}

function post(review) {
  return storageService.post(REVIEWS_KEY, review)
}

function remove(reviewId) {
  return storageService.remove(REVIEWS_KEY, reviewId)
}
