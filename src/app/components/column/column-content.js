import React from 'react'
import PropTypes from 'prop-types'


class ColumnContent extends React.Component {

  style = {
    fullHeight: {
      height: '100%'
    }
  }

  render() {
    return (
      <div style={this.style.fullHeight}>
        {this.props.children}
      </div>
    )
  }

}

export default ColumnContent
