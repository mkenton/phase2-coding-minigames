import useKeyPress from './hooks/useKeyPress'

const ShortCutLegend = () => {
    const isShiftPressed = useKeyPress({ key: "Shift" })
    const isArrowUpPressed = useKeyPress({ key: "ArrowUp" })
    const isArrowDownPressed = useKeyPress({ key: "ArrowDown" })
    const isAltPressed = useKeyPress({key: "Alt"})
    const isCommandPressed = useKeyPress({key: "Meta"})
    const isKPressed = useKeyPress({key: "k"})


    console.log(isKPressed, "k")
  
  
    // useKeyPress({key: 'a'}, (e) => console.log(e.key))
    useKeyPress(['shift.c'], () => {
      console.log("shift + c");
    });
    
    return (
      <div >
        <h1>VSCode Shortcuts</h1>
        <div className="snippet" 
        style={{ 'backgroundColor' : isAltPressed && isArrowUpPressed && !isShiftPressed && !isCommandPressed ? 'Violet' : 'LightGray'}}>
          <span>Move line up: <strong style={{float: 'right'}}>  ⌥ + ↑</strong></span>
        </div>
        <div className="snippet" 
        style={{ 'backgroundColor' : isAltPressed && isArrowDownPressed && !isArrowUpPressed && !isShiftPressed && !isCommandPressed ? 'Violet' : 'LightGray'}}>
          <span>Move line down: <strong style={{float: 'right'}}> ⌥ + ↓</strong></span>
        </div>
        <div className="snippet"
          style={{ 'backgroundColor' : 
          isShiftPressed && isAltPressed && isArrowUpPressed && !isCommandPressed ? 'yellow' : 'LightGray'}}
        >
          <span>Copy line up: <strong style={{float: 'right'}}> ⇧ + ⌥ + ↑</strong></span>
        </div>
        <div className="snippet"
          style={{ 'backgroundColor' : 
          isShiftPressed && isAltPressed && isArrowDownPressed && !isCommandPressed ? 'yellow' : 'LightGray'}}
        >
          <span>Copy line down: <strong style={{float: 'right'}}>  ⇧ + ⌥ + ↓</strong></span>
        </div>
        <div className="snippet" 
        style={{ 'backgroundColor' : isShiftPressed && isCommandPressed && isKPressed && !isArrowUpPressed && !isAltPressed ? 'FireBrick' : 'LightGray'}}>
          <span>Delete current line: <strong style={{float: 'right'}}> ⇧ + ⌘ + K</strong></span>
        </div>
      </div>
    )
  }
  
  export default ShortCutLegend
