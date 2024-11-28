import { bookService } from '../services/book.service.js'
import { debounce } from '../services/util.service.js'

const { useState, useEffect, useRef } = React

export function BookFilter({ defaultFilter, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)
  const onSetFilterDebounce = useRef(debounce(onSetFilter)).current

  useEffect(() => {
    onSetFilterDebounce(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field } = target
    switch (target.type) {
      case 'range':
      case 'number':
        value = +target.value
        break
      case 'checkbox':
        value = target.checked
        break
    }
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  const { title, minSpeed } = filterByToEdit
  return (
    <section className='book-filter'>
      <h2>Filter Our Books</h2>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor='title'>Book Title</label>
        <input
          value={title}
          onChange={handleChange}
          type='text'
          name='title'
          id='title'
        />

        <label htmlFor='minSpeed'>Min Speed</label>
        <input
          value={minSpeed}
          onChange={handleChange}
          type='number'
          name='minSpeed'
          id='minSpeed'
        />

        <button>Submit</button>
      </form>
    </section>
  )
}
