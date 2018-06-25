import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Segment,
  Image,
  Header,
  Label
} from 'semantic-ui-react'


class ProfileBadge extends React.Component {

  static props = {
    badge: PropTypes.shape({
      color: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Label size='tiny' as='a' color={this.props.badge.color} className="fluid">
        <Image avatar outlined spaced='right' src={this.props.badge.image} />
        {this.props.badge.value}
      </Label>
    )
  }
}

export default ProfileBadge
