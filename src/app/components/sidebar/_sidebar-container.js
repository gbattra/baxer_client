import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import SidebarOptionCard from './_sidebar-option-card'


class SidebarContainer extends React.Component {

  style = {
    container: {
      'text-align': 'center'
    }
  }

  props = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    handleOnOptionClick: PropTypes.func.isRequired
  }

  static state = {
    open: false
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div style={this.style.container}>
        <Button onClick={this.handleToggle}>{this.props.label}</Button>
        <div>
          {this.props.options.map((option) => {
            return <div>{option.label}</div>
          })}
        </div>
      </div>
    )
  }
}

export default SidebarContainer
