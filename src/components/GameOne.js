import {useState} from 'react'
import GameOnePlay from "./GameOnePlay"
import HighScore from "./HighScore"

export default function Game1({increaseScore, users}) {

    const [gameStartStop, setGameStartStop] = useState(false)
    const player = users.filter((user) => user.currentPlayer)
    const [highScore, setHighScore] = useState(false)

    // const [thing, setThing] = useState(false)
    // function handleClick() {
    //     increaseScore('game1')
    // }

    function handleClick() {
        setGameStartStop(!gameStartStop)
    }

    function setGame(score) {
        // setGameStartStop(!gameStartStop)
        handleClick()
        if (player[0].game1 < score) {
            setHighScore(!highScore)
            increaseScore('game1', score)
        } 
        // setThing(true)
        // console.log(thing)
    }

    return (
        <div className="game1">
            <h1>Game 1</h1>
            <p>Enter as many numbers correctly as you can within 10 seconds. If you enter a number incorrectly, 
                move on to the next, don't re-type! The object is to match as many of the displayed numbers as 
                possible.</p>
            <button onClick={handleClick}>{gameStartStop ? "stop" : "start"}</button>
            {gameStartStop ? <GameOnePlay users={users} gameStartStop={gameStartStop} setGame={setGame} increaseScore={increaseScore}/> : 
            highScore ? <HighScore /> : ''}
            {/* {player === undefined ? 'select player before starting' : highScore ? <HighScore /> : 'very sad'} */}
        </div>
    )
}