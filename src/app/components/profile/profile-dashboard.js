import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Header,
  Search,
  Card
} from 'semantic-ui-react'
import TrackCard from './track-card'


class ProfileDashboard extends React.Component {

  static props = {
    profile: PropTypes.shape({
      id: PropTypes.int,
      color: PropTypes.string,
      profileImageUrl: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      dateJoined: PropTypes.string,
      location: PropTypes.string,
      badges: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string,
        description: PropTypes.string,
        value: PropTypes.string
      }))
    }).isRequired,
    userIsOwner: PropTypes.bool
  }

  static defaultProps = {
    userIsOwner: true
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row >
          <Grid.Column>
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group itemsPerRow={4}>
              {this.props.profile.tracks.map((track) => {
                return <TrackCard track={track} userIsOwner={this.props.userIsOwner}/>
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileDashboard
