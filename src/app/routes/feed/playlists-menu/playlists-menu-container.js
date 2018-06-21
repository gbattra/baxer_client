import React from 'react'
import PropTypes from 'prop-types'
import SidebarContainer from '../../../components/sidebar/_sidebar-container'


class PlaylistsMenuContainer extends React.Component {

  style = {
    playlistsMenuContainer: {
      height: '100%',
      background: 'gray'
    }
  }

  static props = {
    playlists: PropTypes.array
  }

  static defaultProps = {
    playlists: [{label: 'Hey'}]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  changePlaylist = (playlist) => {
    debugger;
  }

  render() {
    return (
      <div style={this.style.playlistsMenuContainer}>
        <SidebarContainer
          label="Playlists"
          options={this.props.playlists}
          handleOnOptionClick={this.changePlaylist}
        />
      </div>
    )
  }
}

export default PlaylistsMenuContainer
