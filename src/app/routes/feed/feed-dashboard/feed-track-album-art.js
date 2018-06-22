import React from 'react'
import PropTypes from 'prop-types'


class FeedTrackAlbumArt extends React.Component {

  style = {
    container: {
      'background': 'black',
      'height': '0',
      'padding-bottom': '100%',
      'width': '100%',
      'margin': '1em auto'
    }
  }

  static props = {
    albumArtUrl: PropTypes.string
  }

  static defaultProps = {
    albumArtUrl: '#'
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <div style={this.style.container}>
        Album Art
      </div>
    )
  }

}

export default FeedTrackAlbumArt
