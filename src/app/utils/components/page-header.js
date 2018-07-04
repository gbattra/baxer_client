import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Image } from 'semantic-ui-react'


class PageHeader extends React.Component {

  static props = {
    icon: PropTypes.string,
    imageUrl: PropTypes.string,
    label: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Row>
          <Header as='h2'>
            {this.props.icon.length > 0 ? (
              <Icon size='medium' name={this.props.icon} />
            ) : (
              <Image circular src={this.props.imageUrl} />
            )}
            {this.props.label}
          </Header>
        </Grid.Row>
      </Grid>
    )
  }

}

export default PageHeader
