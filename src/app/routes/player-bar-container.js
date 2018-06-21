import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'


class PlayerBarContainer extends React.Component {

  style = {
    barContainer: {
      'height': '5vh',
      'width': '100vw',
      'position': 'absolute',
      'background': 'white'
    }
  }

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  static state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: []
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <div style={this.style.barContainer}>
        <Grid fluid>
          <Row>
            <Col sm={12} md={12}>
              Player
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PlayerBarContainer
