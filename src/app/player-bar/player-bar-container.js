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
    leftNavRoute: PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.string,
    }),
    rightNavRoute: PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.string,
    }),
    updateRouteState: PropTypes.func.isRequired
  }
  state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: []
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  navButtonClicked = (side, route) => {
    this.props.updateRouteState(side, route)
  }

  render() {
    return (
      <Grid columns='three' divided>
        <Grid.Row centered stretched>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='left' route={this.props.leftNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <PlayerControls track={this.props.playingTrack}/>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='right' route={this.props.rightNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerBarContainer
