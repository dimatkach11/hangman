import { useEffect, useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import comuni_1000 from './data/1000_comuni.json'
import { WordResponce } from './interfaces/word.interface'
import Tips from './components/Tips'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'lexicala1.p.rapidapi.com',
  },
}

// fetch('https://lexicala1.p.rapidapi.com/test', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const getWord = async () => {

  const word = comuni_1000[Math.floor(Math.random() * comuni_1000.length)]

  const response = await fetch(`https://lexicala1.p.rapidapi.com/search?text=${word}&language=it`, options)
  
  const data: WordResponce = await response.json()

  return data
}

function App() {
  // parola random da indovinare
  const [wordToGuess, setWordToGuess] = useState({} as WordResponce)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getWord().then((response) => {
      setIsLoading(false)
      setWordToGuess(response)
    })
  }, [])

  // lettere indovinate
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.results[0].headword.text.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = isLoading
    ? false
    : wordToGuess.results[0].headword.text
        .split('')
        .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters((currentLetters) => [...currentLetters, letter])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/) || isLoading) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters, isLoading])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== 'Enter' || isLoading) return

      e.preventDefault()

      setGuessedLetters([])
      setIsLoading(true)
      getWord().then((response) => {
        setIsLoading(false)
        setWordToGuess(response)
      })
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [isLoading])

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
        {isWinner && 'Winner! - Refresh or press Enter to try again'}
        {isLoser && 'Nice Try - Refresh or press Enter to try again'}
      </div>
      <HangmanDrawing incorrectLetters={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={isLoading ? '' : wordToGuess.results[0].headword.text}
      />
      <div
        style={{
          alignSelf: 'stretch',
        }}
      >
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.results[0].headword.text.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      {isLoading ? null : <Tips senses={wordToGuess.results[0].senses} />}
    </div>
  )
}

export default App
