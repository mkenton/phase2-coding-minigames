

export default function Game1({increaseScore}) {

    function handleClick() {
        increaseScore('game1')
    }

    return (
        <div>
            <h1 className="game1">Game 1</h1>
            <button onClick={handleClick}>increase score</button>
        </div>
    )
}