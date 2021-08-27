import { useState, useEffect } from 'react'
import CodeContainer from "./CodeContainer"

export default function GameTwoPlay() {
    const ARR_LENGTH = 7
    const numSnippets = 4
    // const [score, setScore] = useState(0)
    const [goalCode, setGoalCode] = useState([])

    
    useEffect(() => {
        for (let i = 0; i < ARR_LENGTH; i++) {
            goalCode.push(Math.floor(1 + Math.random() * (numSnippets)))
        }
        setGoalCode([...goalCode])
    },[])

    console.log(goalCode)

    return (
        <div>
            <h1> - - - - - </h1>
            <span className="goalContainer">
            <h3 style={{'text-align': 'left', color: 'white'}}>Goal Pattern</h3>
            <CodeContainer goalCode={goalCode} />
            </span>
        </div>
    )
}