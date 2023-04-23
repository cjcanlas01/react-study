import Square from './square'
import { useState } from 'react'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  let status: string
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`
  }

  function handleClick(index: number) {
    // restrict user from clicking on a square that has already been clicked
    if (squares[index] || calculateWinner(squares)) return

    const nextSquares = squares.slice()
    if (isXNext) {
      nextSquares[index] = 'X'
    } else {
      nextSquares[index] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!isXNext)
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareclick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareclick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareclick={() => handleClick(2)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareclick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareclick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareclick={() => handleClick(5)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareclick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareclick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareclick={() => handleClick(8)}></Square>
      </div>
    </>
  )
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}