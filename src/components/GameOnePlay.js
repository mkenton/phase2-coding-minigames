import {useState} from 'react'

export default function GameOnePlay() {

    const randomArray = []
    const ARRAY_LENGTH = 25
    for(let i = 0; i<ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 10))
    }
    console.log(randomArray)

    const userArray = []
    let i = 0

    function checkNumbers(e) {
        e.preventDefault()
        console.log(e.target.value)
        userArray.push(parseInt(e.target.value))
        console.log(userArray)
        randomArray[i] === userArray[i] ? console.log('yes!') : console.log('no!')
        i++
    }

    return (
        <div>
            <h1>{randomArray}</h1>
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