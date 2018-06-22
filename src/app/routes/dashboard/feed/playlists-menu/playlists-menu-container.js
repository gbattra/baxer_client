import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import PlaylistsMenuOption from './playlists-menu-option'


class PlaylistsMenuContainer extends React.Component {

  style = {
    playlistsMenuContainer: {
      'height': '100%',
      'background': 'gray'
    },
    playlistActionBarItem: {
      'padding': '1em',
      'text-align': 'center'
    },
    searchBarContainer: {
      'padding': '1em'
    }
  }

  static props = {
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string
    }))
  }

  static defaultProps = {
    playlists: [
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: ''
      },
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: ''
      },
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: ''
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  changePlaylist = (playlist) => {
  }

  render() {
    return (
      <Grid style={this.style.playlistsMenuContainer}>
        <Row style={{'background':'purple'}}>
          <Col sm={3} md={2} style={this.style.playlistActionBarItem} >Edit</Col>
          <Col sm={6} md={8} style={this.style.playlistActionBarItem} >Playlists</Col>
          <Col sm={3} md={2} style={this.style.playlistActionBarItem} >Add</Col>
        </Row>
        <Row style={{'background': 'pink'}}>
          <Col sm={12} md={12} style={this.style.searchBarContainer} >Search</Col>
        </Row>
        <Row style={{'background': 'yellow', 'padding':'0.5em'}}>
          {this.props.playlists.map((playlist) => {
            return (
              <Col sm={12} md={12}>
                <PlaylistsMenuOption playlist={playlist} />
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

export default PlaylistsMenuContainer
