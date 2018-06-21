import React from 'react'
import PropTypes from 'prop-types'


class SidebarOptionCard extends React.Component {
  static props = {
    label: PropTypes.string,
    size: PropTypes.string,
    handleOnClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    size: 'medium'
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  handleOnClick = (value) => {
    return this.props.handleOnClick(value)
  }

  render() {
    return (
      <div onClick={this.handleOnClick}>
        {this.props.label}
      </div>
    )
  }
}

export default SidebarOptionCard
