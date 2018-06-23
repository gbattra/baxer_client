import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segement,
  Container,
  Button,
  Icon,
  Header,
  Search,
  Dropdown
} from 'semantic-ui-react'
import FeedsListItem from './feeds-list-item'


class FeedsList extends React.Component {

  static props = {
    sortByOptions: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.shape({
        color: PropTypes.string,
        empty: PropTypes.bool,
        circular: PropTypes.bool
      })
    }))
  }

  static defaultProps = {
    sortByOptions: [
      {
        text: 'Date Created',
        value: 'dateCreated',
        label: {
          color: 'green',
          empty: true,
          circular: true
        }
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={3} centered>
            <Button icon>
              <Icon name='edit' />
            </Button>
          </Grid.Column>
          <Grid.Column width={10} centered>
            <Header as='h3' block icon='rocket' content='Feeds List' />
          </Grid.Column>
          <Grid.Column width={3} centered>
            <Button icon>
              <Icon name='add' />
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Dropdown icon='filter' floating button className='icon'>
              <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                  {this.props.sortByOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column width={13}>
            <Search fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FeedsList
