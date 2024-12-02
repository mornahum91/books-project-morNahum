import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getDefaultFilter,
}

// For Debug (easy access from console):
// window.cs = bookService

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.title) {
      const regExp = new RegExp(filterBy.title, 'i')
      books = books.filter((book) => regExp.test(book.title))
    }

    if (filterBy.isOnSale) {
      books = books.filter((book) => book.isOnSale)
    }

    if (filterBy.amount) {
      books = books.filter((book) => filterBy.amount >= book.amount)
    }

    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', description = '', listPrice = '') {
  return { title, description, ...listPrice }
}

function getDefaultFilter(
  filterBy = { title: '', description: '', amount: 200 },
) {
  return {
    title: filterBy.title,
    description: filterBy.description,
    amount: filterBy.amount,
  }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []

    const demoBooksData = [
      {
        id: 'A1bC2dE3F4g',
        title: 'Grow Your Mind',
        description:
          'A captivating story about a secret garden that holds many mysteries and wonders.',
        thumbnail: 'http://ca.org/books-photos/21.jpg',
        listPrice: {
          amount: 89,
          currencyCode: 'USD',
          isOnSale: false,
        },
      },
      {
        id: 'H5I6jK7Lm8N',
        title: 'Harry Potter',
        description:
          'An enchanting tale of adventure and mystery that unfolds under the cover of darkness.',
        thumbnail: 'http://ca.org/books-photos/22.jpg',
        listPrice: {
          amount: 150,
          currencyCode: 'GBP',
          isOnSale: true,
        },
      },
      {
        id: 'O9P0Qr1St2U',
        title: 'The Secret',
        description:
          'A gripping narrative that takes readers on an extraordinary journey across different eras.',
        thumbnail: 'http://ca.org/books-photos/23.jpg',
        listPrice: {
          amount: 120,
          currencyCode: 'EUR',
          isOnSale: false,
        },
      },
    ]
    for (let i = 0; i < 3; i++) {
      books.push(
        _createBook(
          demoBooksData[i],
          utilService.getRandomIntInclusive(80, 300),
        ),
      )
    }
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createBook({ title, description, listPrice }) {
  const book = getEmptyBook(title, description, listPrice)
  book.id = utilService.makeId()
  return book
}
