import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import SidebarOptionCard from './_sidebar-option-card'


class SidebarContainer extends React.Component {

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
      <div>
        <Button onClick={this.handleToggle}>{this.props.label}</Button>
        <div>
          {this.props.options.map((option) => {
            return (
              <SidebarOptionCard
                label={option.label}
                handleOnClick={this.props.handleOnOptionClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default SidebarContainer
