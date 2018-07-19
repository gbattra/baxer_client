import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Image,
  Button,
  Icon
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'
import { Link } from 'react-router-dom';


class NavButton extends React.Component {

  static props = {
    onClickFunc: PropTypes.func.isRequired,
    route: AllShapes.route,
    icon: PropTypes.bool,
    side: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  onButtonClick = () => {
    this.props.onClickFunc(this.props.side, this.props.route)
  }

  render() {
    const alignment = this.props.icon ? 'left' : 'center'
    return (
      <Link to={this.props.route.path}>
        <Button basic className='fw' onClick={this.onButtonClick}>
          <Header as='h4' textAlign={alignment} style={{'textTransform':'capitalize'}}>
          {this.props.icon ? (
            <Icon circular bordered name='arrow left' size='large' />
          ) : (
            <Image circular src={this.props.route.image} />
          )}
            {this.props.route.label}
          </Header>
        </Button>
      </Link>
    )
  }
}

export default NavButton
