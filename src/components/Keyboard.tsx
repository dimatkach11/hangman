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

const Keyboard: FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map(key => (
        <button key={key} className={styles.btn}>{key}</button>
      ))}
    </div>
  )
}

export default Keyboard
