import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Search
} from 'semantic-ui-react'


class PlaylistsDashboard extends React.Component {

  static props = {
    playlistTracks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }))
  }

  static defaultProps = {
    playlistTracks: [
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row >
          <Grid.Column>
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              {this.props.playlistTracks.map((track) => {
                return (
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={1}>
                          <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' rounded />
                        </Grid.Column>
                        <Grid.Column width={15}>
                          <Header as='h5'>
                            {track.title}
                            <Header.Subheader>
                              {track.author}
                            </Header.Subheader>
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                )
              })}
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsDashboard
