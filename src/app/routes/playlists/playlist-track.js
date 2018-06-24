import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Button,
  Popup
} from 'semantic-ui-react'


class PlaylistTrack extends React.Component {

  static props = {
    track: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string,
      isPlaying: PropTypes.bool
    }).isRequired
  }

  render() {
    return (
      <Segment>
        <Grid verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={1}>
              <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' rounded />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as='h5'>
                {this.props.track.title}
                <Header.Subheader>
                  {this.props.track.author}
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} textAlign='right'>
              <Popup trigger={
                <Button basic icon='horizontal ellipsis' size='tiny' />
              } content={
                <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Add to playlist' className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Remove from playlist' className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Add to queue'className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              } hoverable />
              {this.props.track.isPlaying ? (
                <Button icon='pause' size='tiny' />
              ) : (
                <Button icon='play' size='tiny' />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default PlaylistTrack
