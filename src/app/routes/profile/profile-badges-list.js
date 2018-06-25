import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Segment,
  Image,
  Header,
  Icon,
  Popup
} from 'semantic-ui-react'
import ProfileBadge from './profile-badge'


class ProfileBadgesList extends React.Component {

  static props = {
    badges: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string
    })).isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid padded columns='equal'>
        <Grid.Row>
          <Grid.Column centered>
            <Popup inverted trigger = {
              <Header block as='h3' centered>
                <Icon name='certificate' />
                Badges
              </Header>
            } content = {
              'There are many ways to unlock badges, such as uploading your own music or listening to new tracks in your feed. Explore the app to discover them all.'
            } />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {this.props.badges.map((badge) => {
            return (
              <Grid.Column width={8}>
                <ProfileBadge badge={badge} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileBadgesList
