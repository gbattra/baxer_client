import './playlists.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Container } from 'semantic-ui-react'
import PlaylistsMenu from './playlists-menu'
import PlaylistInfo from './playlist-info'
import PlaylistsDashboard from './playlists-dashboard'


class PlaylistsContainer extends React.Component {

  static props = {
    activePlaylist: PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string,
      color: PropTypes.string,
      isSelected: PropTypes.bool,
      tracks: PropTypes.arrayOf({
        id: PropTypes.int,
        title: PropTypes.string,
        author: PropTypes.string,
        runtime: PropTypes.int,
        album_art_url: PropTypes.string,
        isPlaying: PropTypes.bool
      })
    }),
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string,
      color: PropTypes.string,
      isSelected: PropTypes.bool,
      tracks: PropTypes.arrayOf({
        id: PropTypes.int,
        title: PropTypes.string,
        author: PropTypes.string,
        runtime: PropTypes.int,
        album_art_url: PropTypes.string,
        isPlaying: PropTypes.bool
      })
    })).isRequired
  }

  state = {
    activePlaylist: this.props.playlists[0]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid columns={3} divided className="playlists-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <Container>
              <PlaylistsMenu playlists={this.props.playlists}/>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container>
              <PlaylistsDashboard playlist={this.props.activePlaylist}/>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <PlaylistInfo playlist={this.state.activePlaylist} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsContainer
