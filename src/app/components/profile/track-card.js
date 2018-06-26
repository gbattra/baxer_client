import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  Button,
  Popup
} from 'semantic-ui-react'


class TrackCard extends React.Component {

  static props = {
    track: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      albumArtUrl: PropTypes.string
    }),
    userIsOwner: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.userIsOwner) {
      return (
        <Card color={this.props.track.color} image={this.props.track.trackArtUrl} header={this.props.track.title} link extra={
          <Grid columns='equal' textAlign='center'>
            <Grid.Column>
              <Popup trigger={
                <Button basic floated='left' icon='heartbeat' />
              } content={
                "View this track's stat sheet"
              } inverted position='right center' />
            </Grid.Column>
            <Grid.Column>
              <Button basic centered icon='play' />
            </Grid.Column>
            <Grid.Column>
              <Button basic floated='right' icon='horizontal ellipsis'  />
            </Grid.Column>
          </Grid>
        }/>
      )
    } else {
      return (
        <Card color={this.props.track.color} image={this.props.track.trackArtUrl} header={this.props.track.title} link extra={
          <Grid columns='equal' textAlign='center'>
            <Grid.Column>
              <Button basic floated='left' icon='heart' />
            </Grid.Column>
            <Grid.Column>
              <Button basic centered icon='play' />
            </Grid.Column>
            <Grid.Column>
              <Button basic floated='right' icon='comment' />
            </Grid.Column>
          </Grid>
        } />
      )
    }
  }
}

export default TrackCard
