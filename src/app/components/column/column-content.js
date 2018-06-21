import React from 'react'
import PropTypes from 'prop-types'


class ColumnContent extends React.Component {

  style = {
    fullHeight: {
      height: '100%'
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
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
