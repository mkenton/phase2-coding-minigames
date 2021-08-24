import {useState} from 'react'

export default function GameOnePlay() {

    const [numbers, setNumbers] = useState([])
    const userArray = []

    const ARRAY_LENGTH = 50
    const randomArray = []
    for(let i = 0; i<ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 20))
    }

    function checkNumbers(e) {
        e.preventDefault()
        setNumbers(e.target.value)
        userArray.push(numbers)
        for(let i = 0; i < randomArray.length; i++) {
            randomArray[i] === userArray[i] ? console.log('yes!') : console.log('no!')
        }
    }

    return (
        <div>
            <h1>{randomArray}</h1>
            <input 
                type="text" 
                placeholder="type!"
                id="gameInput"
                value={numbers}
                onChange={(e) => checkNumbers(e)}
            />
        </div>
    )
}