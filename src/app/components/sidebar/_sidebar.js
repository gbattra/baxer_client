import React from 'react'
import PropTypes from 'prop-types'


class Sidebar extends React.Component {

  props = {
    open: PropTypes.bool
  }

  defaultProps = {
    open: false
  }

  state = {
    open: this.props.open
  }

  render() {
      return (
        <div>
          {this.props.children}
        </div>
      )
  }

}

export default Sidebar
