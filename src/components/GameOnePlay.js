
export default function GameOnePlay() {

    const ARRAY_LENGTH = 50
    const randomArray = []
    for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.floor(Math.random() * 20))}

    return (
        <h1>{randomArray}</h1>
    )
}