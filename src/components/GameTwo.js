// import useKeyPress from '../useKeyPress'
import {useState} from 'react'
import ShortCutLegend from "./ShortCutLegend"

export default function Game2() {

    const [gameStartStop, setGameStartStop] = useState(false)
    // const [showLegend, setShowLegend] = useState(false)

    function handleClick() {
        setGameStartStop(!gameStartStop)
        console.log(typeof player)
}
    return (
        <div>
            <h1 className="game2">Game 2</h1>
            <button onClick={handleClick}>{gameStartStop ? "Quit" : "Start!"}</button>
            <p className="game-description">Play to exercise your keyboard shortcut mastery! Use VSCode Shortcuts to move code blocks to match the goal pattern</p>
            {gameStartStop ? <ShortCutLegend /> : ''}
        </div>
    )
}