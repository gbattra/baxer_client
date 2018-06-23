import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import DashboardContainer from './routes/dashboard/dashboard-container'
import PlayerBarContainer from './routes/player-bar/player-bar-container'
import './app-container.scss'


class AppContainer extends React.Component {

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    })
  }

  static defaultProps = {
    playingTrack: {
      id: 1,
      title: 'Create',
      author: 'Overwerk',
      runtime: 120,
      album_art_url: ''
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <Grid celled='internally' className='app-container'>
        <Grid.Row stretched>
          <Grid.Column width={16}>
            <DashboardContainer />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width={16}>
            <PlayerBarContainer playingTrack={this.props.playingTrack} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AppContainer
