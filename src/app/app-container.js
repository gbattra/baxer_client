import React from 'react'
import PropTypes from 'prop-types'
import DashboardContainer from './routes/dashboard-container'
import PlayerBarContainer from './routes/player-bar-container'


class AppContainer extends React.Component {

  style = {
    container: {
      height: '95vh',
      width: '100vw'
    }
  }

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
      <div style={this.style.container}>
        <DashboardContainer />
        <PlayerBarContainer playingTrack={this.props.playingTrack}/>
      </div>
    )
  }
}

export default AppContainer
