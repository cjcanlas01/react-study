import { MouseEventHandler } from "react"

type SquareProps = {
  value: string
  onSquareclick: MouseEventHandler
}

export default function Square({value, onSquareclick}: SquareProps) {
  return (
    <button 
      onClick={onSquareclick}
      className="square">
        {value}
    </button>
  )
}