

export default function Game1({increaseScore}) {

    function handleClick() {
        increaseScore('game1')
    }

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
        </div>
    )
}