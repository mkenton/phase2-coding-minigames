import {useState, useEffect } from 'react'
import Correct from './Correct'
import Incorrect from './Incorrect'


export default function GameOnePlay({ gameStartStop, setGame }) {
    
    const [correctIncorrect, setCorrectIncorrect] = useState('start')
    const [randomArray, setRandomArray] = useState([])
    const [i, setI] = useState(0)
    const [score, setScore] = useState(0)
    const [seconds, setSeconds] = useState(10)

    useEffect(() => {
        const ARRAY_LENGTH = 20
        for(let i = 0; i<ARRAY_LENGTH; i++) {
            randomArray.push(Math.floor(Math.random() * 10))
        }
        setRandomArray([...randomArray])
    }, [])

    // console.log(randomArray)

    useEffect(() => {
        let interval = null;
        if (gameStartStop) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
        } else if (!gameStartStop && seconds !== 0) {
          clearInterval(interval);
        } 
        return () => clearInterval(interval);
      }, [gameStartStop, seconds]);
    
      if (seconds === 0) {
        setGame(score)
        // increaseScore('game1', score)
     }
    
    const userArray = []

    function checkNumbers(e) {
        e.preventDefault()
        userArray.push(parseInt(e.target.value))
        console.log(userArray);
        (randomArray[i] === userArray[0] ? correct() : setCorrectIncorrect(false))
        const bla = i + 1 
        setI(bla)
    }

    function correct() {
        setCorrectIncorrect(true)
        const bla = score + 1
        setScore(bla)
        console.log(score)
    }

    return (
        <div className="game1-play">
            <h1>You have {seconds} seconds</h1>
            <h1 className="number">{randomArray}</h1>
            {correctIncorrect === 'start' ? '' : correctIncorrect ? <Correct/> : <Incorrect/>}
            <input 
                type="text" 
                placeholder="type here!"
                id="gameInput"
                value={''}
                onChange={(e) => checkNumbers(e)}
            />
        </div>
    )
}