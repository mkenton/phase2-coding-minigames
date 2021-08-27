import {useState} from 'react'
import GameOnePlay from "./GameOnePlay"
import HighScore from "./HighScore"
import BadJob from './BadJob'
import Component from "./GameSound"

export default function Game1({increaseScore, users}) {

    const [gameStartStop, setGameStartStop] = useState(false)
    const player = users.filter((user) => user.currentPlayer)
    const [highScore, setHighScore] = useState(false)

    const [thing, setThing] = useState(false)

    function handleClick() {
            setGameStartStop(!gameStartStop)
            console.log(typeof player)
    }


    function setGame(score) {
        handleClick()
        if (player[0].game1 < score) {
            setHighScore(!highScore)
            increaseScore('game1', score)
            setThing(false)
        } else {
            setHighScore(false)
            setThing(true)
        }
    }

    return (
        <div>
            <h1>~Number Cruncher~</h1>
            <p className="game-description">Enter as many numbers correctly as you can within 10 seconds. If you enter a number incorrectly, 
                move on to the next, don't re-type! The object is to match as many of the displayed numbers as 
                possible.</p>
            {gameStartStop ? <Component/> : ''}
            <button onClick={handleClick}>{gameStartStop ? "stop" : "start"}</button>
            <p>Current Player: {player[0].name}</p>
            {gameStartStop ? <GameOnePlay users={users} gameStartStop={gameStartStop} setGame={setGame} increaseScore={increaseScore}/> : 
            highScore ? <HighScore /> : thing ? <BadJob /> : ''}
        </div>
    )
}