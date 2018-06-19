import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Sidebar from './_sidebar'


class SidebarContainer extends React.Component {

  props = {
    label: PropTypes.string
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
          <div>Hey</div>
          <div>Hey 2</div>
        </div>
      </div>
    )
  }
}

export default SidebarContainer
