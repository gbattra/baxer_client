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

  props = {
    playlists: PropTypes.array
  }

  defaultProps = {
    playlists: [{label: 'Hey'}]
  }

  changePlaylist = (playlist) => {
    debugger;
  }

  render() {
    const playlists = [{label: 'Hey'}]
    return (
      <div style={this.style.playlistsMenuContainer}>
        <SidebarContainer
          label="Playlists"
          options={playlists}
          handleOnOptionClick={this.changePlaylist}
        />
      </div>
    )
  }
}

export default PlaylistsMenuContainer
