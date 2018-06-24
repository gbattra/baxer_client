import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import FeedContainer from './routes/feed/feed-container'
import PlayerBarContainer from './player-bar/player-bar-container'
import PlaylistsContainer from './routes/playlists/playlists-container'
import './app-container.scss'


class AppContainer extends React.Component {

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }),
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string,
      color: PropTypes.string,
      isSelected: PropTypes.bool
    }))
  }

  static defaultProps = {
    playingTrack: {
      id: 1,
      title: 'Create',
      author: 'Overwerk',
      runtime: 120,
      album_art_url: ''
    },
    playlists: [
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
        color: 'teal',
        isSelected: true,
      },
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
        color: 'purple',
        isSelected: false,
      },
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png',
        color: 'olive',
        isSelected: false,
      }
    ]
  }

  state = {
    dashboard: {
      label: 'playlists',
      image: 'https://react.semantic-ui.com/assets/images/avatar/large/patrick.png'
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  updateRouteState = (route) => {
    this.setState({
      dashboard: route
    })
  }

  getDashboardComponent = () => {
    if (this.state.dashboard.label === 'feed') {
      return (
        <FeedContainer />
      )
    } else if (this.state.dashboard.label === 'profile') {
      return (
        <div>Profile</div>
      )
    } else if (this.state.dashboard.label === 'playlists') {
      return (
        <PlaylistsContainer playlists={this.props.playlists}/>
      )
    }
  }

  render() {
    return (
      <Grid celled='internally' className='app-container'>
        <Grid.Row stretched>
          <Grid.Column width={16} className='dashboard-container'>
            {this.getDashboardComponent()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <PlayerBarContainer playingTrack={this.props.playingTrack} updateRouteState={this.updateRouteState} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AppContainer
