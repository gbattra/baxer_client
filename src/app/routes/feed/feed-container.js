import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import FeedDashboard from './feed-dashboard'
import FeedsList from './feeds-list'


class FeedContainer extends React.Component {
  static props = {
    feedTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    })
  }

  static defaultProps = {
    feedTrack: {
      id: 1,
      title: 'Head Full of Shadows',
      author: 'The Glitch Mob',
      runtime: 120,
      album_art_url: ''
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
            <Container></Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FeedContainer
