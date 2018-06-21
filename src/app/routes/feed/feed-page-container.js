import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import PlaylistsMenuContainer from './playlists-menu/playlists-menu-container'
import FeedDashboardContainer from './feed-dashboard/feed-dashboard-container'
import FilterOptionsContainer from './filter-options/filter-options-container'
import ColumnContent from '../../components/column/column-content'


class FeedPageContainer extends React.Component {

  style = {
    zeroBuffer: {
      padding: 0,
      margin: 0,
      height: '100%'
    }
  }

  render() {
    return (
      <Grid fluid style={this.style.zeroBuffer}>
        <Row style={this.style.zeroBuffer}>
          <Col xs={3} md={3} style={this.style.zeroBuffer}>
            <ColumnContent>
              <PlaylistsMenuContainer/>
            </ColumnContent>
          </Col>
          <Col xs={6} md={6} style={this.style.zeroBuffer}>
            <ColumnContent>
              <FeedDashboardContainer />
            </ColumnContent>
          </Col>
          <Col xs={3} md={3} style={this.style.zeroBuffer}>
            <ColumnContent>
              <FilterOptionsContainer />
            </ColumnContent>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default FeedPageContainer
