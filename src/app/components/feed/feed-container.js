import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import FeedDashboard from './feed-dashboard'
import FeedsList from './feeds-list'
import LikedTracksList from './liked-tracks-list'


class FeedContainer extends React.Component {
  static props = {
    feedTrack: AllShapes.track
  }

  static defaultProps = {
    feedTrack: {
      id: 1,
      title: 'Head Full of Shadows',
      author: 'The Glitch Mob',
      runtime: 120,
      trackArtUrl: '',
      shareCount: 150
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid columns={3} divided className="feed-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <Container className="feed-lists-container">
              <FeedsList />
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container>
              <FeedDashboard feedTrack={this.props.feedTrack} />
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <LikedTracksList />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FeedContainer
