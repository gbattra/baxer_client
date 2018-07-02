import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class FeedQueue extends React.Component {

  static props = {
    upcomingTracks: PropTypes.arrayOf(AllShapes.track)
  }

  static defaultProps = {
    upcomingTracks: [
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        trackArtUrl: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        trackArtUrl: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        trackArtUrl: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        trackArtUrl: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        trackArtUrl: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        trackArtUrl: ''
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              {this.props.upcomingTracks.map((track) => {
                return (
                  <Segment>
                    <Grid verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' rounded />
                        </Grid.Column>
                        <Grid.Column width={14}>
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

export default FeedQueue
