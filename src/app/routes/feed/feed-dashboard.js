import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Segment,
  Image,
  Header,
  Icon
} from 'semantic-ui-react'
import FeedQueue from './feed-queue'
import FeedHeader from './feed-header'
import './feed.scss'

class FeedDashboard extends React.Component {

  static props = {
    feedTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row stretched centered>
          <Grid.Column>
            <FeedHeader label='My First Feed' imageUrl='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={13}>
            <Grid.Row>
              <Grid padded centered>
                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' size='medium' rounded />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row stretched centered>
                  <Grid.Column width={16}>
                    <Segment inverted color='blue'></Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={6} centered>
                  <Grid.Column>
                    <Segment inverted color='red'></Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment inverted color='red'></Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment inverted color='red'></Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <FeedQueue />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FeedDashboard
