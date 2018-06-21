import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import SidebarOptionCard from './_sidebar-option-card'


class SidebarContainer extends React.Component {

  containerStyle = {
    'text-align': 'center'
  }

  props = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    handleOnOptionClick: PropTypes.func.isRequired
  }

  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div style={this.containerStyle}>
        <Button onClick={this.handleToggle}>{this.props.label}</Button>
        <div>
          {this.props.options.map((option) => {
            return <div></div>
          })}
        </div>
      </div>
    )
  }
}

export default SidebarContainer
