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
import { AllShapes } from '../../shapes/all-shapes'


class PlaylistsDashboard extends React.Component {

  static props = {
    playlistTracks: PropTypes.arrayOf(AllShapes.track)
  }

  static defaultProps = {
    playlist: {
      id: 1,
      name: 'My First Playlist',
      trackCount: 14,
      runtime: 180,
      playlistArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      color: 'teal',
      isSelected: true,
      tracks: [
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: '',
          isPlaying: true
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          trackArtUrl: ''
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: ''
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          trackArtUrl: ''
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: ''
        },
        {
          id: 1,
          title: 'Wont Stop Rocking',
          author: 'R3hab',
          runtime: 120,
          trackArtUrl: ''
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
