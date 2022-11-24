import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from './data/words_list.json'

function App() {
  // parola random da indovinare
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  )

  // lettere indovinate
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
        }}
      >
        Lose Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <div
        style={{
          alignSelf: 'stretch',
        }}
      >
        <Keyboard />
      </div>
    </div>
  )
}

export default App
