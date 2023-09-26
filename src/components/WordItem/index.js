import './index.css'

const WordItem = props => {
  const {word} = props
  const {wordInput} = word
  return (
    <li className="word-item-container">
      <div className="word-item">
        <p className="word">{wordInput}:</p>
        <p className="word-length">{wordInput.length}</p>
      </div>
    </li>
  )
}

export default WordItem
