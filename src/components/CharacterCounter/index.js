import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import WordItem from '../WordItem'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    wordListCount: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitUserEnterText = event => {
    event.preventDefault()

    const {userInput} = this.state

    const newWord = {
      id: uuidv4(),
      wordInput: userInput,
    }

    this.setState(prevState => ({
      wordListCount: [...prevState.wordListCount, newWord],
      userInput: '',
    }))
  }

  render() {
    const {userInput, wordListCount} = this.state
    return (
      <div className="app-container">
        <div className="app-card-container">
          <div className="left-side-right-side-container">
            <div className="left-side-container">
              <div className="app-left-heading-container">
                <h1 className="left-side-heading">
                  Count the characters like a Boss
                </h1>
              </div>
              {wordListCount.length === 0 ? (
                <div className="img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs"
                    className="user-input-image"
                  />
                </div>
              ) : (
                <ul className="word-items-container">
                  {wordListCount.map(eachWord => (
                    <WordItem key={eachWord.id} word={eachWord} />
                  ))}
                </ul>
              )}
            </div>

            <div className="right-side-container">
              <div>
                <h1 className="right-side-heading">Character Counter</h1>
              </div>
              <form
                className="form-container"
                onSubmit={this.onSubmitUserEnterText}
              >
                <input
                  type="Text"
                  className="input-box"
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeUserInput}
                  value={userInput}
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
