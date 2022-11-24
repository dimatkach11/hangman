import { FC } from 'react'

const HEAD = (
  <div key={1}
    style={{
      width: '50px',
      height: '50px',
      border: '10px solid black',
      borderRadius: '100%',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
)

const BODY = (
  <div key={2}
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  />
)

const RIGHT_ARM = (
  <div key={3}
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',

      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
)

const LEFT_ARM = (
  <div key={4}
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',

      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
)

const RIGHT_LEG = (
  <div key={5}
    style={{
      width: '120px',
      height: '10px',
      background: 'black',
      position: 'absolute',

      top: '210px',
      right: '-110px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
)

const LEFT_LEG = (
  <div key={6}
    style={{
      width: '120px',
      height: '10px',
      background: 'black',
      position: 'absolute',

      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
)

const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
]

type HangmanDrawingProps = {
  incorrectLetters: number
}

const HangmanDrawing: FC<HangmanDrawingProps> = ({ incorrectLetters }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {/* hangman dinamic parts */}
      {BODY_PARTS.slice(0, incorrectLetters)}

      {/* vertical top absolute bar */}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      {/* horizontal top bar */}
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      {/* vertical bar */}
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      {/* horizontal bottom bar */}
      <div
        style={{
          height: '10px',
          width: '250px',
          background: 'black',
        }}
      />
    </div>
  )
}

export default HangmanDrawing
