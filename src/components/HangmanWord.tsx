import { FC } from 'react'

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

const HangmanWord: FC<HangmanWordProps> = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: '.1em solid black',
          }}
        >
          <span
            style={{
              visibility: (guessedLetters.includes(letter) || reveal)
                ? 'visible'
                : 'hidden',
              color: reveal && !guessedLetters.includes(letter) ? 'red' : 'black'
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
