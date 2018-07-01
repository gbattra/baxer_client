import './app-container.scss'
import { AllShapes } from '../../shapes/all-shapes'
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import FeedContainer from '../feed/feed-container'
import PlayerBarContainer from '../player-bar/player-bar-container'
import PlaylistsContainer from '../playlists/playlists-container'
import ProfileContainer from '../profile/profile-container'
import TrackPageContainer from '../track/track-page-container'


const ROUTES = {
  PROFILE: 0,
  PLAYLISTS: 1,
  FEED: 2,
  TRACK: 3
}


class AppContainer extends React.Component {

  static props = {
    playingTrack: AllShapes.track,
    playlists: PropTypes.arrayOf(AllShapes.playlist),
    allRoutes: AllShapes.route,
    profile: AllShapes.profile
  }

  static defaultProps = {
    profile: {
      id: 1,
      color: 'teal',
      profileImageUrl: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
      name: 'Broderick Attra',
      description: 'I make waves of air pulse through your earholes in appealing ways',
      dateJoined: 'June, 2018',
      location: 'Boston, MA',
      badges: [
        {
          color: 'teal',
          icon: 'map',
          label: 'Location',
          description: 'Where ahh you??',
          value: 'Boston, MA'
        },
        {
          color: 'purple',
          icon: 'calendar',
          label: 'Date Joined',
          description: 'Never forget your Rocketyr birthday',
          value: 'June, 2018'
        },
        {
          color: 'black',
          icon: 'rocket',
          label: 'Rocketyr Rank',
          description: 'The higher the rank, the better... probably',
          value: 'Bronze'
        },
        {
          color: 'yellow',
          icon: 'bug',
          label: 'Chatter Bug',
          description: 'When you love a track, you make sure to let the artist know',
          value: 'Frequent Commenter'
        }
      ],
      tracks: [
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
          shareCount: 150,
          color: 'blue'
        },{
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
          shareCount: 150,
          color: 'yellow'
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
          shareCount: 150,
          color: 'pink'
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
          shareCount: 150,
          color: 'red'
        },
        {
          id: 1,
          title: 'Create',
          author: 'Overwerk',
          runtime: 120,
          trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
          shareCount: 150,
          color: 'teal'
        }
      ]
    },
    playingTrack: {
      id: 1,
      title: 'Create',
      author: 'Overwerk',
      runtime: 120,
      trackArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      shareCount: 150,
      trackRank: {
        color: 'olive',
        icon: 'chess knight',
        label: 'knight',
        value: 1000
      }
    },
    playlists: [
      {
        id: 1,
        name: 'My First Playlist',
        trackCount: 14,
        runtime: 180,
        playlistArtUrl: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
        color: 'teal',
        isSelected: true,
      }
    ],
    allRoutes: [
      {
        label: 'profile',
        image: 'https://react.semantic-ui.com/images/avatar/small/molly.png'
      },
      {
        label: 'playlists',
        image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
      },
      {
        label: 'feed',
        image: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
      },
      {
        label: 'track',
        image: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
      }
    ]
  }

  state = {
    currentRoute: this.props.allRoutes[ROUTES.TRACK],
    leftNavRoute: this.props.allRoutes[ROUTES.FEED],
    rightNavRoute: this.props.allRoutes[ROUTES.PLAYLISTS]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  updateRouteState = (side, route) => {
    const sideNavRoute = side === 'left' ? 'leftNavRoute' : 'rightNavRoute'
    this.setState((prevState) => {
      return {
        [sideNavRoute]: prevState.currentRoute,
        currentRoute: route
      }
    })
  }

  getDashboardComponent = () => {
    if (this.state.currentRoute.label === 'feed') {
      return (
        <FeedContainer />
      )
    } else if (this.state.currentRoute.label === 'profile') {
      return (
        <ProfileContainer profile={this.props.profile}/>
      )
    } else if (this.state.currentRoute.label === 'playlists') {
      return (
        <PlaylistsContainer playlists={this.props.playlists}/>
      )
    } else if (this.state.currentRoute.label === 'track') {
      return (
        <TrackPageContainer track={this.props.playingTrack} />
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
            <PlayerBarContainer
              playingTrack={this.props.playingTrack}
              updateRouteState={this.updateRouteState}
              leftNavRoute={this.state.leftNavRoute}
              rightNavRoute={this.state.rightNavRoute}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AppContainer
