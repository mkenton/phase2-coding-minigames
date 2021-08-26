import useKeyPress from '../useKeyPress'

const CodeSnippet = () => {
    const isShiftPressed = useKeyPress({ key: "Shift" })
    const isArrowUpPressed = useKeyPress({ key: "ArrowUp" })
    const isCommandPressed = useKeyPress({key: "Meta"})
  
    useKeyPress({key: 'a'}, (e) => console.log('pressing a'))

    return (
      <div >
        <div className="snippet" 
        style={{ 'backgroundColor' : isShiftPressed && !isArrowUpPressed ? 'Violet' : 'LightGray'}}>
          <span>Shift</span>
        </div>
        <div className="snippet" 
        style={{ 'backgroundColor' : isArrowUpPressed && !isShiftPressed? 'Violet' : 'LightGray'}}>
          <span>Up</span>
        </div>
        <div className="snippet"
          style={{ 'backgroundColor' : 
          isShiftPressed && isArrowUpPressed && !isCommandPressed? 'yellow' : 'LightGray'}}
        >
          <span>Shift + Up</span>
        </div>
        <div className="snippet"
          style={{ 'backgroundColor' : 
          isShiftPressed && isArrowUpPressed && isCommandPressed ? 'MediumSeaGreen' : 'LightGray'}}
        >
          <span>Command + Shift + Up</span>
        </div>
      </div>
    )
  }

  export default CodeSnippet