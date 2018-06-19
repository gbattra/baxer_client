import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import PlaylistsMenuContainer from './playlists-menu/playlists-menu-container'


class FeedPageContainer extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={2} md={3}>
            <PlaylistsMenuContainer />
          </Col>
          <Col xs={8} md={6}>
            Feed
          </Col>
          <Col xs={2} md={3}>
            Filters
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default FeedPageContainer
