import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
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
      description: PropTypes.string,
      value: PropTypes.string
    })).isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{'padding':'1em'}}>
        <Popup inverted trigger = {
          <Header block as='h3'>
            <Icon name='certificate' />
            Badges
          </Header>
        } content={
          'There are many ways to unlock badges, such as uploading your own music or listening to new tracks in your feed. Explore the app to discover them all.'
        } />
        <Grid padded>
          {this.props.badges.map((badge) => {
            return (
              <ProfileBadge badge={badge} />
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default ProfileBadgesList
