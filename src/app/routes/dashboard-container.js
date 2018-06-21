import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import PlaylistsMenuContainer from './feed/playlists-menu/playlists-menu-container'
import FeedDashboardContainer from './feed/feed-dashboard/feed-dashboard-container'
import FilterOptionsContainer from './feed/filter-options/filter-options-container'
import ColumnContent from '../components/column/column-content'


class DashboardContainer extends React.Component {

  style = {
    zeroBuffer: {
      padding: 0,
      margin: 0,
      height: '100%'
    }
  }

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
      title: 'Create',
      author: 'Overwerk',
      runtime: 120,
      album_art_url: ''
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    console.log(this.props.feedTrack);
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
              <FeedDashboardContainer feedTrack={this.props.feedTrack} />
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

export default DashboardContainer
