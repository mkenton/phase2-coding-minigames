import {useState} from 'react'
import GameOnePlay from "./GameOnePlay"

export default function Game1({increaseScore}) {

    const [gameStartStop, setGameStartStop] = useState(false)

    function handleClick() {
        increaseScore('game1')
    }

    function setGame() {
        setGameStartStop(!gameStartStop)
    }

    return (
        <div className="game1">
            <h1>Game 1</h1>
            <p>Enter as many numbers correctly as you can within 10 seconds</p>
            <button onClick={setGame}>{gameStartStop ? "stop" : "start"}</button>
            {gameStartStop ? <GameOnePlay /> : ''}
        </div>
    )
}