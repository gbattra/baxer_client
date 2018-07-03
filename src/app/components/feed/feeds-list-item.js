import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon
} from 'semantic-ui-react'


class FeedsListItem extends React.Component {

  static props = {
    feedsListItem: AllShapes.feed.isRequired
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
        <Grid verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as='h4'>
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                {this.props.feedsListItem.name}
              </Header>
            </Grid.Column>
            <Grid.Column width={3} className="right aligned">
              {this.state.isSelected ? (
                  <Icon name='selected radio' size='large'/>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default FeedsListItem
