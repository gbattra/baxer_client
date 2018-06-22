import React from 'react'
import PropTypes from 'prop-types'


class FilterOptionsContainer extends React.Component {

  style = {
    filterOptionsContainer: {
      height: '100%',
      background: 'gray'
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <div style={this.style.filterOptionsContainer}>
        Filters
      </div>
    )
  }
}

export default FilterOptionsContainer
