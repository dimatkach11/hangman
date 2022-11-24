import { FC } from 'react'

const HangmanDrawing: FC = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
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
