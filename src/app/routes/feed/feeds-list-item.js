import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Segment,
  Header,
  Image
} from 'semantic-ui-react'


class FeedsListItem extends React.Component {

  static props = {
    feedsListItem: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    }).isRequired
  }

  state = {
    isSelected: true
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment color={this.props.feedsListItem.color}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as='h4'>
                <Image circular src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                {this.props.feedsListItem.name}
              </Header>
            </Grid.Column>
            <Grid.Column>
              {this.state.isSelected ? (
                  <div>Check</div>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default FeedsListItem
