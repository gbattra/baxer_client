import React from 'react'
import PropTypes from 'prop-types'
import SidebarContainer from '../../components/sidebar/_sidebar-container'


class PlaylistsMenuContainer extends React.Component {

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
      <SidebarContainer
        label="Playlists"
        options={playlists}
        handleOnOptionClick={this.changePlaylist}
      />
    )
  }
}

export default PlaylistsMenuContainer
