const { useEffect, useState } = React

export function LongTxt({ txt, length = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleText = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='long-txt'>
      {isExpanded ? txt : `${txt.substring(0, length)}...`}
      <button onClick={toggleText}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}
