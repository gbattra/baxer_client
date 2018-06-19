import React from 'react'
import PropTypes from 'prop-types'


class SidebarOptionCard extends React.Component {
  props = {
    label: PropTypes.string,
    size: PropTypes.string
  }

  defaultProps = {
    size: 'medium'
  }

  render() {
    return (
      <div>
        {this.props.label}
      </div>
    )
  }
}

export default SidebarOptionCard
