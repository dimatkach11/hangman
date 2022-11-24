import { FC } from 'react'
import styles from './Keyboard.module.css'
const KEYS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void,
  disabled?: boolean
}

const Keyboard: FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInActive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`${styles.btn} ${isActive && styles.active} ${
              isInActive && styles.inactive
            }`}
            disabled={isInActive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
