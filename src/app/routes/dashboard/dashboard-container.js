import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from 'semantic-ui-react'
import FeedDashboardContainer from './feed/feed-dashboard-container'
import './dashboard-container.scss'


class DashboardContainer extends React.Component {

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
      <Grid columns='three' divided className="dashboard-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <Container></Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <FeedDashboardContainer feedTrack={this.props.feedTrack} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Container></Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default DashboardContainer
