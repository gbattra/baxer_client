import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Image,
  Header,
  Card,
  Divider,
  Button
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class PlaylistInfo extends React.Component {

  static props = {
    playlist: AllShapes.playlist.isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <Card centered color={this.props.playlist.color}>
              <Image src={this.props.playlist.playlistArtUrl} />
              <Card.Content textAlign='center'>
                <Card.Header>{this.props.playlist.name}</Card.Header>
                <Card.Meta>
                    {this.props.playlist.trackCount} tracks
                    |
                    {this.props.playlist.runtime} runtime
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Grid columns={2}>
                  <Grid.Column textAlign='right' >
                    <Button icon='edit' size='small' basic />
                  </Grid.Column>
                  <Grid.Column textAlign='left'>
                    <Button icon='trash' size='small' basic />
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistInfo
