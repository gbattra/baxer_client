import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Header,
  Search,
  Icon,
  Button
} from 'semantic-ui-react'
import PlaylistsMenuOption from './playlists-menu-option'


class PlaylistsMenu extends React.Component {

  static props = {
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      trackCount: PropTypes.int,
      runtime: PropTypes.int,
      playlistArtUrl: PropTypes.string
    })).isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  changePlaylist = (playlist) => {

  }

  render() {
    return (
      <Grid padded>
        <Grid.Row verticalAlign='middle' className="left aligned">
          <Grid.Column width={3} centered>
            <Button icon>
              <Icon name='edit' />
            </Button>
          </Grid.Column>
          <Grid.Column width={10} centered textAlign='center'>
            <Header as='h3' block icon='headphones' content='Playlists' />
          </Grid.Column>
          <Grid.Column width={3} className="right aligned">
            <Button icon>
              <Icon name='add' />
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} className="right aligned">
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            {this.props.playlists.map((playlist) => {
              return <PlaylistsMenuOption playlist={playlist} />
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsMenu
