import {useState} from 'react'
import GameOnePlay from "./GameOnePlay"

export default function Game1({increaseScore}) {

    const [gameStartStop, setGameStartStop] = useState(false)

    function handleClick() {
        increaseScore('game1')
    }

<<<<<<< HEAD
    function setGame() {
        setGameStartStop(!gameStartStop)
    }

    return (
        <div className="game1">
            <h1>Game 1</h1>
            <p>Enter as many numbers correctly as you can within 10 seconds</p>
            <button onClick={setGame}>{gameStartStop ? "stop" : "start"}</button>
            {gameStartStop ? <GameOnePlay /> : ''}
=======
    // const handleKeyDown = (event)=>{
    //     event.preventDefault();
    //   console.log('Key: ' + event.key)
    //   console.log('KeyCode: ' + event.keyCode)
    //   console.log('CharCode: ' + event.charCode);
    //   console.log('Code: ' + event.code);
    // }

    return (
        <div className="game-area" >
            <h1 className="game1">Game 1</h1>
            <button onClick={handleClick}>increase score</button>
>>>>>>> 7497361e8a617c8320962d7a0e7b384f0ce5d384
        </div>
    )
}