import React, { Component } from "react"

export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    console.log('playing')
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src='https://www.googleapis.com/drive/v3/files/1jgSM7TDO0faBncgxUybDbFbhRewX3yIo?alt=media&key=AIzaSyD_OxteKP6ZVPE6egB1d4Gvz8I2pYs4wsQ'></source>
        </audio>
      </div>
    )
  }
}

