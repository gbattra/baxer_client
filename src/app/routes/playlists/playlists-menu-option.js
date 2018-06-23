import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'


class PlaylistsMenuOption extends React.Component {

  style = {
    playlistArtContainer: {
      'background': 'black',
      'height': '0px',
      'padding-bottom': '70%',
      'width': '70%'
    }
  }

  static props = {
    playlist: PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string
    }).isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <Row middle="xs" style={{'background': 'blue', 'padding': '0.5em', 'margin':'0.25em 0'}}>
        <Col sm={3} md={2} style={{'padding': '0'}}>
          <div style={this.style.playlistArtContainer}>
            {this.props.playlist.playlistArtUrl}
          </div>
        </Col>
        <Col sm={9} md={10}>
          <Row>
            <Col sm={12} md={12} style={{'padding':'0.25em'}} >{this.props.playlist.name}</Col>
          </Row>
          <Row>
            <Col sm={3} md={3} style={{'padding':'0.25em'}} >{this.props.playlist.trackCount}</Col>
            <Col sm={3} md={3} style={{'padding':'0.25em'}} >{this.props.playlist.runtime}</Col>
          </Row>
        </Col>
      </Row>
    )
  }

}

export default PlaylistsMenuOption
