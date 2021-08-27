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
    <span>
      <h3 style={{textAlign: 'center'}}>VSCode Shortcuts</h3>

      <div className="snippet"
        style={{ 'backgroundColor': isLineUp ? 'Violet' : 'LightGray' }}>
        <span>Move line up: <strong style={{ float: 'right' }}>  ⌥ + ↑</strong></span>
      </div>

      <div className="snippet"
        style={{ 'backgroundColor': isLineDown ? 'Violet' : 'LightGray' }}>
        <span>Move line down: <strong style={{ float: 'right' }}> ⌥ + ↓</strong></span>
      </div>

      <div className="snippet"
        style={{ 'backgroundColor': isCopyLineUp ? 'yellow' : 'LightGray' }}>
        <span>Copy line up: <strong style={{ float: 'right' }}> ⇧ + ⌥ + ↑</strong></span>

      </div>
      <div className="snippet"
        style={{ 'backgroundColor': isCopyLineDown ? 'yellow' : 'LightGray' }}>
        <span>Copy line down: <strong style={{ float: 'right' }}>  ⇧ + ⌥ + ↓</strong></span>
      </div>

      <div className="snippet"
        style={{ 'backgroundColor': isDeleteLine ? 'FireBrick' : 'LightGray' }}>
        <span>Delete current line: <strong style={{ float: 'right' }}> ⇧ + ⌘ + K</strong></span>
      </div>
    </span>
  )
}

export default ShortCutLegend
