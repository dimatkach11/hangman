import { FC, useState } from 'react'
import { WordSens } from '../interfaces/word.interface'

import styles from './Tips.module.css'

type TipsProps = {
  senses: WordSens[]
}

const Tips: FC<TipsProps> = ({ senses }) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
      }}
    >
      {senses.map((sense) => (
        <Tip key={sense.id} {...sense} />
      ))}
    </div>
  )
}

const Tip: FC<WordSens> = (sense) => {
  const [showTip, setShowTip] = useState(false)

  return (
    <>
      {!showTip && (
        <button className={styles.btn} onClick={() => setShowTip(true)}>
          Mostra suggerimento
        </button>
      )}
      <div
        style={{
          display: (showTip && sense.definition) ? 'block' : 'none',
          fontSize: '1.8rem',
          margin: '.5rem 0'
        }}
      >
        "{sense.definition}"
      </div>
    </>
  )
}

export default Tips
