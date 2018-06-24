import './player-bar.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Icon,
  Image,
  Button
} from 'semantic-ui-react'
import PlayerControls from './player-controls.js'
import NavButton from './nav-button'


class PlayerBarContainer extends React.Component {

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired,
    currentRoute: PropTypes.string,
    leftNavRoute: PropTypes.string,
    rightNavRoute: PropTypes.string,
    updateRouteState: PropTypes.func.isRequired
  }

  state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: [],
    currentRoute: {
      label: 'feed',
      image: 'https://react.semantic-ui.com/assets/images/avatar/large/patrick.png'
    },
    leftNavRoute: {
      label: 'profile',
      image: 'https://react.semantic-ui.com/assets/images/avatar/small/molly.png'
    },
    rightNavRoute: {
      label: 'playlists',
      image: 'https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  navButtonClicked = (side, route) => {
    const sideNavRoute = side === 'left' ? 'leftNavRoute' : 'rightNavRoute'
    this.setState((prevState) => {
      return {
        [sideNavRoute]: prevState.currentRoute,
        currentRoute: route
      }
    })
    this.props.updateRouteState(route)
  }

  render() {
    return (
      <Grid columns='three' divided>
        <Grid.Row centered stretched>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='left' route={this.state.leftNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <PlayerControls track={this.props.playingTrack}/>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='right' route={this.state.rightNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerBarContainer
