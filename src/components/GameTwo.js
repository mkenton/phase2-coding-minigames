
export default function Game2({increaseScore}) {

    function handleClick() {
        increaseScore('game2')
    }

    return (
        <div className="game-area">
            <h1 className="game2">Game 2</h1>
            <button onClick={handleClick}>increase score</button>
        </div>
    )
}