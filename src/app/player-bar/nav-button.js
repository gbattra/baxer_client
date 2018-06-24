import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Image,
  Button
} from 'semantic-ui-react'


class NavButton extends React.Component {

  static props = {
    onClickFunc: PropTypes.func.isRequired,
    route: PropTypes.shape({
      label: PropTypes.string,
      image: PropTypes.string
    }),
    side: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  onButtonClick = () => {
    this.props.onClickFunc(this.props.side, this.props.route)
  }

  render() {
    return (
      <Button basic className='fw' onClick={this.onButtonClick}>
        <Header as='h4' style={{'text-transform':'capitalize'}}>
          <Image circular src={this.props.route.image}/>
          {this.props.route.label}
        </Header>
      </Button>
    )
  }
}

export default NavButton
