import useKeyPress from './hooks/useKeyPress'

const ShortCutLegend = () => {
  const isShiftPressed = useKeyPress({ key: "Shift" })
  const isArrowUpPressed = useKeyPress({ key: "ArrowUp" })
  const isArrowDownPressed = useKeyPress({ key: "ArrowDown" })
  const isAltPressed = useKeyPress({ key: "Alt" })
  const isCommandPressed = useKeyPress({ key: "Meta" })
  const isKPressed = useKeyPress({ key: "k" })

  const isLineUp = isAltPressed && isArrowUpPressed && !isShiftPressed && !isCommandPressed;
  const isLineDown = isAltPressed && isArrowDownPressed && !isArrowUpPressed && !isShiftPressed && !isCommandPressed;
  const isCopyLineUp = isShiftPressed && isAltPressed && isArrowUpPressed && !isCommandPressed;
  const isCopyLineDown = isShiftPressed && isAltPressed && isArrowDownPressed && !isCommandPressed;
  const isDeleteLine = isShiftPressed && isCommandPressed && isKPressed && !isArrowUpPressed && !isAltPressed && !isArrowDownPressed



  // useKeyPress({key: 'a'}, (e) => console.log(e.key))
  useKeyPress(['shift.c'], () => {
    console.log("shift + c");
  });

  return (
    <div className="legend">
      <h4 style={{textAlign: 'left', color:'red', 'margin-bottom': '5px', marginLeft: '5px'}}> VSCode Shortcuts</h4>

      <div className="legendKey"
        style={{ 'backgroundColor': isLineUp ? 'darkgrey' : '' }}>
        <span>Move line up <strong style={{ float: 'right' }}>  ⌥ + ↑</strong></span>
      </div>

      <div className="legendKey"
        style={{ 'backgroundColor': isLineDown ? 'grey' : '' }}>
        <span>Move line down <strong style={{ float: 'right' }}> ⌥ + ↓</strong></span>
      </div>

      <div className="legendKey"
        style={{ 'backgroundColor': isCopyLineUp ? 'grey' : '' }}>
        <span>Copy line up <strong style={{ float: 'right' }}> ⇧ + ⌥ + ↑</strong></span>

      </div>
      <div className="legendKey"
        style={{ 'backgroundColor': isCopyLineDown ? 'grey' : '' }}>
        <span>Copy line down <strong style={{ float: 'right' }}>  ⇧ + ⌥ + ↓</strong></span>
      </div>

      <div className="legendKey"
        style={{ 'backgroundColor': isDeleteLine ? 'grey' : '' }}>
        <span>Delete line <strong style={{ float: 'right' }}> ⇧ + ⌘ + K</strong></span>
      </div>
    </div>
  )
}

export default ShortCutLegend
