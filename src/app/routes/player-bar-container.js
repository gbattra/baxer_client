import React from 'react'
import PropTypes from 'prop-types'


class PlayerBarContainer extends React.Component {

  style = {
    barContainer: {
      height: '5vh',
      width: '100vw'
    }
  }

  props = {
    track: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: []
  }

  render() {
    return (
      <div style={this.style.barContainer}>
        Player
      </div>
    )
  }
}

export default PlayerBarContainer
