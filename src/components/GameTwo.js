// import useKeyPress from '../useKeyPress'
import ShortCutLegend from "./ShortCutLegend"

export default function Game2({ increaseScore }) {


    function handleClick() {
        increaseScore('game2')
    }


    return (
        <div
            // onKeyDown={(e) => onKeyPressed(e)}
            // className="game2-area" 
            // tabIndex="0"
            >
            <button onClick={
                handleClick
            }
            >increase score</button>
            <h1 className="game2">Game 2</h1>
            <ShortCutLegend/>
        </div>
    )
}