// import useKeyPress from '../useKeyPress'
import CodeSnippet from "./CodeSnippet"

export default function Game2({ increaseScore }) {


    function handleClick() {
        increaseScore('game2')
    }

    // function onKeyPressed(e) {
    //     console.log(e.key);
    // }

    // "keypress"==c&&!n.metaKey&&!n.ctrlKey
    // const handleKeyDown = (event)=>{
    //     event.preventDefault();
    //   console.log('Key: ' + event.key)
    //   console.log('KeyCode: ' + event.keyCode)
    //   console.log('CharCode: ' + event.charCode);
    //   console.log('Code: ' + event.code);
    // }

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
            <CodeSnippet/>
        </div>
    )
}