import { useState, useEffect } from 'react'
import CodeContainer from "./CodeContainer"

export default function GameTwoPlay() {
    const ARR_LENGTH = 10;
    const numSnippets = 4;
    // const [score, setScore] = useState(0)
    const [goalCode, setGoalCode] = useState([]);

    useEffect(() => {
        for (let i = 0; i < ARR_LENGTH; i++) {
            goalCode.push(Math.floor(Math.random() * (numSnippets)))
        }
        setGoalCode([...goalCode])
    }, [])

    const initCode = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4];
    const [codes, setCodes] = useState(initCode);

    // console.log(goalCode)

    return (
        <div>
            <h1> - - - - - </h1>
            <div className="grid-container">
                <div className="editor">
                <h3 style={{ color: 'white' }}>Editor</h3>
                        <CodeContainer codes={codes} />
                </div>
                <div className="goalContainer">
                <h3 style={{ color: 'white' }}>Goal Pattern:</h3>
                    <CodeContainer codes={goalCode} />
                </div>

            </div>
        </div>
    )
}