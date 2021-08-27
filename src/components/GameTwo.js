// import useKeyPress from '../useKeyPress'
import {useState} from 'react'
import ShortCutLegend from "./ShortCutLegend"
import GameTwoPlay from "./GameTwoPlay"

export default function Game2() {

    const [gameStartStop, setGameStartStop] = useState(false)
    const [showLegend, setShowLegend] = useState(false)

    function handleClick() {
        setGameStartStop(!gameStartStop)
    }

        function handleShowLegend() {
            setShowLegend(!showLegend)
}

// function setGame(score) {
//     handleClick()
//     if (player[0].game2 < score) {
//         setHighScore(!highScore)
//         increaseScore('game1', score)
//         setThing(false)
//     } else {
//         setHighScore(false)
//         setThing(true)
//     }
// }


    return (
        <div>
            <h1 className="gameTitle">~Code Builder~</h1>
            <p className="game-description">Exercise your keyboard shortcut mastery! Use VSCode keyboard Shortcuts to move code blocks to match the goal pattern. For shortcut hints, click the Legend below.</p>
            <button style={{'margin-bottom': '10px'}} onClick={handleShowLegend}>{showLegend ? "Hide Legend" : "Show Legend"}</button>
            <div>{showLegend ? <ShortCutLegend /> : ''}</div>
            <button className="start-button" onClick={handleClick}>{gameStartStop ? "Quit" : "Start!"}</button>
            <div>{gameStartStop? <GameTwoPlay /> : '' }</div>
        </div>
    )
}