import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Search
} from 'semantic-ui-react'
import PlaylistTrack from './playlist-track'


class PlaylistsDashboard extends React.Component {

  static props = {
    playlistTracks: PropTypes.arrayOf(PropTypes.shape({
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
    }))
  }

  static defaultProps = {
    playlist: {
      id: 1,
      name: 'My First Playlist',
      trackCount: 14,
      runtime: 180,
      playlistArtUrl: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
      color: 'teal',
      isSelected: true,
      tracks: [
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          album_art_url: '',
          isPlaying: true
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          album_art_url: ''
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          album_art_url: ''
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          album_art_url: ''
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          album_art_url: ''
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          album_art_url: ''
        }
      ]
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row >
          <Grid.Column>
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              {this.props.playlist.tracks.map((track) => {
                return <PlaylistTrack track={track} />
              })}
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsDashboard
