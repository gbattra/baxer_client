import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Divider
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'


class FeedQueue extends React.Component {

  static props = {
    upcomingTracks: PropTypes.arrayOf(AllShapes.track)
  }

  static defaultProps = {
    upcomingTracks: AllDefaults.tracks
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid inverted padded centered>
        <Grid.Row color='black'>
          <Grid.Column>
            <Segment.Group inverted>
              {this.props.upcomingTracks.map((track) => {
                return (
                  <div>
                    <Segment inverted>
                      <Grid verticalAlign='middle'>
                        <Grid.Row>
                          <Grid.Column width={2}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' rounded />
                          </Grid.Column>
                          <Grid.Column width={14}>
                            <Header inverted as='h5'>
                              {track.title}
                              <Header.Subheader>
                                {track.author}
                              </Header.Subheader>
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <Divider />
                  </div>
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
